import { IJwtService } from '@modules/jwt';
import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../commands/login.command';
import { ICacheService } from '@modules/cache/cache.interface';
import { UserEntity } from '@apis/user/entities/user.entity';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
	private logger = new Logger(LoginHandler.name);

	constructor(
		private readonly jwtService: IJwtService,
		private readonly cacheService: ICacheService
	) {}

	async execute(command: LoginCommand) {
		this.logger.debug('login');
		const { user } = command;
		const tokenKey = `accessToken:${user.id}`;

		//lấy cache token trong redis
		const existingToken = await this.getCacheJWT(tokenKey);

		if (existingToken) return existingToken;

		return await this.returnTokenAuth(user, tokenKey);
	}

	//Return token auth
	async returnTokenAuth(user: UserEntity | JwtPayload, tokenKey: string) {
		const accessToken = await this.handleAccessToken(user);
		const refreshToken = await this.handleRefreshToken(user);

		const output = {
			accessToken: accessToken.token,
			expiresIn: accessToken.expiresIn,
			refreshToken: refreshToken.token
		};

		//tạo token redis
		await this.createCacheJWT(tokenKey, Object.values(output).join('/*/'), 3600); // 60 phút
		return output;
	}

	//Hàm Refresh Token
	async handleRefreshToken(user: UserEntity | JwtPayload) {
		const payload: JwtPayload = {
			id: user.id,
			refreshId: Math.random().toString(),
			role: user.role
		};

		const refreshToken = await this.handleTokenJWT(payload, {
			expiresIn: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60 // 7d
		});

		const refreshKey = `refreshToken:${user.id}`;
		await this.createCacheJWT(refreshKey, refreshToken.token, 604800); //7d

		return refreshToken;
	}

	//Hàm Access Token
	async handleAccessToken(user: UserEntity | JwtPayload) {
		const payload: JwtPayload = {
			id: user.id,
			role: user.role
		};
		const accessToken = await this.handleTokenJWT(payload, {
			expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 // 60 phút
		});
		return accessToken;
	}

	// Tạo token
	async handleTokenJWT(payload: JwtPayload, options: { expiresIn: number }) {
		const token = await this.jwtService.sign(payload, options);
		return { token, expiresIn: options.expiresIn };
	}

	async createCacheJWT(tokenKey: string, data: string, time: number) {
		const cache = await this.cacheService.set(tokenKey, data, time);
		return cache;
	}

	async getCacheJWT(tokenKey: string) {
		const cache = await this.cacheService.get(tokenKey);
		if (!cache) return null;
		const separatedValues = cache.split('/*/');
		return {
			accessToken: separatedValues?.[0],
			expiresIn: separatedValues?.[1],
			refreshToken: separatedValues?.[2]
		};
	}
}
