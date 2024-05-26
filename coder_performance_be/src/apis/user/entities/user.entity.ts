import { BaseEntity, AccountType, Gender } from '@common';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { hash } from 'argon2';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	/** uuid */
	@ApiHideProperty()
	@PrimaryGeneratedColumn('uuid')
	@Exclude()
	id!: string;

	/** Mật khẩu */
	@ApiHideProperty()
	@Column()
	@Exclude()
	password!: string;

	/** Ngày tháng năm sinh */
	@ApiProperty({ description: 'Ngày tháng năm sinh' })
	@Column({ type: 'date', nullable: true })
	dob?: Date | null;

	/** Họ */
	@ApiProperty({ description: 'Họ' })
	@Column({ nullable: true })
	lastName!: string;

	/** Tên */
	@ApiProperty({ description: 'Tên' })
	@Column({ nullable: true })
	firstName!: string;

	/** Email */
	@ApiProperty({ description: 'Email' })
	@Column({ nullable: true })
	email!: string;

	/** Số điện thoại */
	@ApiProperty({ description: 'Số điện thoại' })
	@Column({ nullable: true })
	phoneNumber!: string;

	/** Phân quyền */
	@Exclude()
	@ApiHideProperty()
	@Column({ default: AccountType.Applicant, enum: AccountType})
	role?: number;

	/** Giới tính */
	@ApiProperty({ description: 'Giới tính' })
	@Column({ enum: Gender, nullable: true })
	gender?: Gender;

	@BeforeInsert()
	async beforeInsert() {
		this.password = await hash(this.password);
	}
}
