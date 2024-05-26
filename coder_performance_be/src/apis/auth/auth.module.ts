import { UserModule } from '@apis/user/user.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { IAuthService } from './auth.interface';
import { AuthService } from './auth.service';
import { LoginHandler } from './handlers/login.handler';
import { refreshTokenHandle } from './handlers/refreshToken.handler';
import { RegisterHandler } from './handlers/register.handler';
import { UserJwtStrategy } from './strategies/jwt/user.jwt.strategy';
import { UserLocalStrategy } from './strategies/local/user.local.strategy';
import { CacheModule } from '@modules/cache/cache.module';

@Module({
	imports: [PassportModule, UserModule, CacheModule],
	controllers: [AuthController],
	providers: [
		{
			provide: IAuthService,
			useClass: AuthService
		},

		UserLocalStrategy,
		UserJwtStrategy,

		LoginHandler,
		refreshTokenHandle,
		RegisterHandler
	]
})
export class AuthModule {}
