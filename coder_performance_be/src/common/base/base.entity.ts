import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity as TypeOrmBaseEntity,
	UpdateDateColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';

export class BaseEntity extends TypeOrmBaseEntity {
	/** uuid */
	@ApiProperty({ description: 'uuid' })
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	/** Ngày tạo */
	@ApiProperty({ description: 'Ngày tạo' })
	@CreateDateColumn()
	createdAt!: Date;

	/** Lần cuối update */
	@ApiProperty({ description: 'Lần cuối update' })
	@UpdateDateColumn()
	updatedAt!: Date;

	/** Ngày xoá */
	@ApiProperty({ description: 'Ngày xoá' })
	@DeleteDateColumn()
	deletedAt?: Date | null;

	/** Kích hoạt */
	@Column({ default: true })
	@Exclude()
	@ApiHideProperty()
	isActive!: boolean;
}
