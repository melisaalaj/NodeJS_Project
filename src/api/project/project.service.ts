/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './repository/project.repository';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';


@Injectable()
export class ProjectService {
  
  constructor(private readonly projectRepository: ProjectRepository) {}

  async getProject(): Promise<Project[]> {
    return await this.projectRepository.getProject();
  }

  async createProject(projectDto: CreateProjectDto): Promise<Project> {
    return await this.projectRepository.saveProject(projectDto);
  }

  async updateProject(
    uuid: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return await this.projectRepository.updateProject(uuid, updateProjectDto);
  }

  async removeProject(projectId: string): Promise<void> {
    return await this.projectRepository.removeProject(projectId);
  }

  async addUserToProject(projectId:string, userId: string) :Promise<void>{
    return await this.projectRepository.addUserToProject(projectId,userId)
  }
}
