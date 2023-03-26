/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './repository/project.repository';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { UserService } from "../user/user.service";

@Injectable()
export class ProjectService {
  
  constructor(private readonly projectRepository: ProjectRepository,
    private readonly userService: UserService,) {}

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

  async assignUsersToProject(
    projectId: string,
    userId: string[],
  ): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: {
        uuid: projectId,
      },
      relations: ['users'],
    });
    if (!userId || userId.length === 0) {
      return project;
    }
    const users = await this.userService.findUsersByIds(userId);
    project.users = [...project.users, ...users];
    await this.projectRepository.createProject(project);
    return project;
  }
}
