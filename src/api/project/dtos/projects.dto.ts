/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Type } from '../enums/types.enum';

export class CreateProjectDto {
  @Column({ nullable: true })
  url: string;

  @Column()
  name: string;

  @Column({ type: 'enum', nullable: false, enum: Type, default: Type.OTHER })
  type: Type;
}
