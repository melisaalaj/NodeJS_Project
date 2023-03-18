/* eslint-disable prettier/prettier */
import { Project } from 'src/api/project/entities/project.entity';
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Column, Entity, ManyToOne} from 'typeorm';
import { Status } from '../enums/status.enum';
import { Type } from '../enums/types.enum';

@Entity('tasks')
export class Task extends AuditEntity{

    @Column()
    name: string;

    @Column({ 
        type: 'enum',
        enum: Type,
        default: Type.OTHER
    })
    type: Type;

    @Column()
    description: string;

    @Column()
    deadline: string;

    @Column({
        type: 'enum', 
        enum: Status,
        default: Status.UNASSIGNED
    })
    status: Status;

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;
}
