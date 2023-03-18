/* eslint-disable prettier/prettier */
import { User } from 'src/api/user/entities/user.entity';
import { AuditEntity } from 'src/common/db/customBaseEntites/AuditEntity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Type } from '../enums/types.enum';

@Entity('projects')
export class Project extends AuditEntity{

    @Column({ unique: true }) 
    url: string;

    @Column()
    name: string;

    @Column({ 
        type: 'enum',
        enum: Type,
        default: Type.TENTATIVE
    })
    type: Type;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}
