/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Public } from '../../common/decorators/public.decorator';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRoles } from '../user/enums/roles.enum';

@UseGuards(new RolesGuard())
@ApiTags('Project')
@Controller('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Roles(UserRoles.ADMIN)
  @Public()
  @Get()
  async getProject(): Promise<Project[]> {
    return await this.projectService.getProject();
  }

  @Roles(UserRoles.ADMIN)
  @Public()
  @Post()
  async createProject(@Body() projectDto: CreateProjectDto): Promise<Project> {
    return await this.projectService.createProject(projectDto);
  }

  @Roles(UserRoles.ADMIN)
  @Public()
  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() data: UpdateProjectDto,
  ): Promise<Project> {
    return await this.projectService.updateProject(id, data);
  }

  @Roles(UserRoles.ADMIN)
  @Public()
  @Delete(':id')
  async removeProject(@Param('id') id: string): Promise<void> {
    return await this.projectService.removeProject(id);
  }

  @Public()
  @Post(':id/users/:userId')
  async addUserToProject(@Param('id') projectId: string, @Param('userId') userId: string): Promise<void> {
  return await this.projectService.addUserToProject(projectId, userId);
  }

}
