/* eslint-disable prettier/prettier */
import { IBaseCustomRepository } from 'src/common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { Project } from '../entities/project.entity';
export type IProjectRepository = IBaseCustomRepository<Project>;
