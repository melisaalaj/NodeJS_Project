/* eslint-disable prettier/prettier */

import { Project } from 'src/api/project/entities/project.entity';
import { User } from 'src/api/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { FileType } from '../enums/filetypes.enum';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ unique: true })
  url: string;

  @Column({
    type: 'enum',
    enum: FileType,
    default: FileType.OTHER,
  })
  filetype: FileType;

  @ManyToOne(() => User, user => user.reports)
  user: User;

  @ManyToOne(() => Project, project => project.reports)
  project: Project;
}
