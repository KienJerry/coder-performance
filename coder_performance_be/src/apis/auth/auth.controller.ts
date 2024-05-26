import { UserEntity } from '@apis/user/entities/user.entity';
import { ApiController, User, ApiCreate } from '@common';
import { Body, Controller, HttpCode, Post, UseGuards, Query } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { AuthStrategy } from './auth.const';
import { ApiLogin, ApiRefreshToken } from './auth.swagger';
import {
	LoginCommand,
	RegisterCommand,
	RefreshTokenCommand
} from './commands/index.commands.module';
import { LoginUserDto, RegisterUserDto, RefreshTokenUserDto } from './dto/index.dto.module';

@Controller('auth')
@ApiController('Auth')
export class AuthController {
	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(AuthGuard(AuthStrategy.USER_LOCAL))
	@Post('user/login')
	@HttpCode(200)
	@ApiLogin('user')
	loginUser(@Body() _loginUserDto: LoginUserDto, @User() user: UserEntity) {
		return this.commandBus.execute(new LoginCommand({ user }));
	}

	@Post('user/refresh-token')
	@HttpCode(200)
	@ApiRefreshToken('user')
	refreshToken(@Body() _refreshToken: RefreshTokenUserDto) {
		return this.commandBus.execute(
			new RefreshTokenCommand({ data: _refreshToken })
		);
	}

	@Post('user/register')
	@ApiCreate(UserEntity, 'User')
	registerUser(@Body() _registerUserDto: RegisterUserDto) {
		return this.commandBus.execute(new RegisterCommand({ data: _registerUserDto }));
	}
}
