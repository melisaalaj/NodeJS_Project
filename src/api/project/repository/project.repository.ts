/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CustomRepository } from '../../../common/db/decorators/CustomRepository.decorator';
import { Project } from '../entities/project.entity';
import { BaseCustomRepository } from '../../../common/db/customBaseRepository/BaseCustomRepository';
import { IProjectRepository } from '../interfaces/project.interface';
import { HttpException, UnprocessableEntityException } from '@nestjs/common';
import { UpdateProjectDto } from '../dtos/update-project.dto';
import { CreateProjectDto } from '../dtos/projects.dto';

@CustomRepository(Project)
export class ProjectRepository
  extends BaseCustomRepository<Project>
  implements IProjectRepository
{
  createProject(data: CreateProjectDto): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  
  async getProject(): Promise<Project[]> {
    return await this.find();
  }

  async saveProject(project: CreateProjectDto): Promise<Project> {
    const newProject = this.create(project);
    await this.save(newProject);
    return newProject;
  }

  async getProjectById(projectId:string):Promise<Project>{
    const project = await this.findOneBy({uuid : projectId})
         if (!project) {
        throw new UnprocessableEntityException('This project does not exist!');
        }
        return project;
  }

  async updateProject(id:string, data: UpdateProjectDto) :Promise<Project>{

    const project = this.getProjectById(id);

    if(!project){
        throw new HttpException('Project does not exist',404);
    }
    await this.update({uuid:id},data)
    const updated = this.getProjectById(id);

    return updated;
  }

  async removeProject(projectId: string): Promise<void> {
    const project = await this.findOneBy({uuid:projectId})
    await this.delete(project.id);
  }
}