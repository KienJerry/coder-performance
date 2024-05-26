import { Logger, ConflictException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterCommand } from '../commands/index.commands.module';
import { IUserService } from '@apis/user/user.interface';
import { BaseEntity as T, IsNotEmpty } from '@common';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
	private logger = new Logger(RegisterHandler.name);

	constructor(private readonly userService: IUserService) {}

	async execute(command: RegisterCommand) {
		this.logger.debug('register');
		const { data } = command;
		let query: any = {
			where: [
				{
					email: data.email
				},
				{
					phoneNumber: data.phoneNumber
				}
			]
		};

		const handleGetUser = await this.getOneUser(query);
		if (!!handleGetUser) throw new ConflictException('Tài khoản đã tồn tại');

		return this.userService.create(data);
	}

	async getOneUser(option: FindOptions<T>) {
		return this.userService.getOne(option);
	}
}
