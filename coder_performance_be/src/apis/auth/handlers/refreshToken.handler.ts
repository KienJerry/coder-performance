import { IJwtService } from '@modules/jwt';
import { Logger, UnauthorizedException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RefreshTokenCommand } from '../commands/refreshToken.command';
import { ICacheService } from '@modules/cache/cache.interface';
import { UserEntity } from '@apis/user/entities/user.entity';
import { RegisterCommand } from '../commands/index.commands.module';
import { LoginHandler } from '@apis/auth/handlers/login.handler';

@CommandHandler(RefreshTokenCommand)
export class refreshTokenHandle implements ICommandHandler<RefreshTokenCommand> {
	Invalid_Token = 'Mã token không hợp lệ';
	private logger = new Logger(refreshTokenHandle.name);

	constructor(
		private readonly jwtService: IJwtService,
		private readonly cacheService: ICacheService,
		private readonly loginHandler: LoginHandler
	) {}

	async execute(command: RefreshTokenCommand) {
		this.logger.debug('refreshToken');
		const { data } = command;
		try {
			const { refreshToken } = data;
			const decoded = await this.jwtService.verify(refreshToken);
			console.log(decoded, 'decoded', !decoded?.refreshId);
			console.log(refreshToken, 'refreshToken');

			if (
				!decoded?.refreshId ||
				(await this.getCacheJWT(`refreshToken:${decoded.id}`)) != refreshToken
			)
				throw new UnauthorizedException(this.Invalid_Token);

			const tokenKey = `accessToken:${decoded.id}`;
			return await this.loginHandler.returnTokenAuth(decoded, tokenKey);
		} catch (error) {
			throw new UnauthorizedException(this.Invalid_Token);
		}
	}

	async getCacheJWT(tokenKey: string) {
		const cache = await this.cacheService.get(tokenKey);
		return cache;
	}
}
