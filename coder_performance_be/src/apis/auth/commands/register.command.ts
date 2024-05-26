import { RegisterUserDto } from '../dto/index.dto.module';

export class RegisterCommand {
	data!: RegisterUserDto;

	constructor(data: RegisterCommand) {
		Object.assign(this, data);
	}
}
