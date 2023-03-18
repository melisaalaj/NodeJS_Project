/* eslint-disable prettier/prettier */
import { IBaseCustomRepository } from '../../../common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { CreateProjectDto } from '../dtos/projects.dto';
import { Project } from '../entities/project.entity';

export interface IProjectRepository extends IBaseCustomRepository<Project> {
  getProject(): Promise<Project[]>;
  saveProject(project: CreateProjectDto);
  updateProject(id: number, project: CreateProjectDto): Promise<Project>;
}