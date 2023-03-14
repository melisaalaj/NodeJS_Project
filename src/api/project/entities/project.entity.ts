/* eslint-disable prettier/prettier */
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Column, Entity } from 'typeorm';
import { ProjectType } from '../enums/types.enum';

@Entity('projects')
export class Project extends AuditEntity{
    @Column({ unique: true }) 
    url: string;

    @Column()
    name: string;

    @Column({ 
        type: 'enum',
        enum: ProjectType,
        default: ProjectType.TENTATIVE
    })
    type: ProjectType;
}
