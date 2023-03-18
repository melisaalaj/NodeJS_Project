/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { Status } from '../enums/status.enum';
import { Type } from '../enums/types.enum';

export class CreateTaskDto {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'enum', nullable: false, enum: Type, default: Type.OTHER })
  type: Type;

  @Column({ type: 'enum', nullable: false, enum: Status, default: Type.OTHER })
  status: Status;

  @Column()
  deadline: string;
}
