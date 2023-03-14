/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomRepositoryModule } from 'src/common/db/CustomRepository.module';


@Module({
  imports: [CustomRepositoryModule.forCustomRepository([]),
  ],
})
export class ProjectModule {}
