/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectRepository } from './repository/project.repository';
import { CustomRepositoryModule } from '../../common/db/CustomRepository.module';


@Module({
  imports: [CustomRepositoryModule.forCustomRepository([ProjectRepository])], 
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}