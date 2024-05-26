import { IsNotEmpty, IsString } from '@common';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenUserDto {
	/** Refresh Token */
	@ApiProperty({
		description: 'Refresh Token',
		example: 'string',
		type: 'string'
	})
	@IsString()
	@IsNotEmpty()
	refreshToken!: string;
}
