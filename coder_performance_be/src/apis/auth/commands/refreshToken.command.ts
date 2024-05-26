import { RefreshTokenUserDto } from '../dto/refresh-token-user.dto';

export class RefreshTokenCommand {
	data!: RefreshTokenUserDto;

	constructor(data: RefreshTokenCommand) {
		Object.assign(this, data);
	}
}
