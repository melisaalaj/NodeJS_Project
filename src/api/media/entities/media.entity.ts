/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Type } from '../enums/types.enum';

@Entity('medias')
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ unique: true })
  key: string;

  @Column({ unique: true })
  url: string;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.OTHER,
  })
  filetype: Type;
}
