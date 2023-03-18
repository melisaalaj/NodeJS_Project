/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable prettier/prettier */
import {  Injectable } from '@nestjs/common';
import { ProjectRepository } from './repository/project.repository';
import { Project } from './entities/project.entity';
import {  CreateProjectDto } from './dtos/create-project.dto';


@Injectable()
export class ProjectService {
  
  constructor(private readonly projectRepository: ProjectRepository) {}

  async getProject(): Promise<Project[]> {
    return await this.projectRepository.getProject();
  }

  async createProject(projectDto: CreateProjectDto): Promise<Project> {
    return await this.projectRepository.saveProject(projectDto);
  }

  async updateProject(id: number, project: CreateProjectDto): Promise<Project> {
    return await this.projectRepository.updateProject(id, project);
  }
  
}