import { IsNotEmpty, IsString, IsEmail, Gender } from '@common';
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
	/** Họ */
	@ApiProperty({
		description: 'Họ của người dùng',
		example: 'Nguyễn',
		type: 'string'
	})
	@IsString()
	@IsNotEmpty()
	lastName!: string;

	/** Tên */
	@ApiProperty({
		description: 'Tên của người dùng',
		example: 'Kiên',
		type: 'string'
	})
	@IsString()
	@IsNotEmpty()
	firstName!: string;

	/** Email */
	@ApiProperty({
		description: 'Email của người dùng',
		example: 'example@gmail.com',
		type: 'string'
	})
	@IsEmail()
	@IsNotEmpty()
	email!: string;

	/** Số điện thoại */
	@ApiProperty({
		description: 'Số điện thoại của người dùng',
		example: '0123456789',
		type: 'string'
	})
	@IsString()
	@IsNotEmpty()
	phoneNumber!: string;

	/** Mật khẩu */
	@ApiProperty({
		description: 'Mật khẩu của người dùng',
		example: 'SuperSecret_123',
		type: 'string'
	})
	@IsString()
	@IsNotEmpty()
	@Length(8, 20)
	password!: string;

	/** Giới tính */
	@ApiProperty({
		description: 'Giới tính: Nam (1), Nữ (0), Khác (3)',
		enum: [Gender.Male, Gender.Female, Gender.Other]
	})
	@IsNotEmpty()
	gender!: Gender;
}
