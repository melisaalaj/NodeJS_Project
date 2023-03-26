import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { PaginationInterceptor } from 'src/common/interceptors/pagination.interceptor';
import { UserRoles } from '../user/enums/roles.enum';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';
import { ReportService } from './report.service';

@ApiBearerAuth()
@ApiTags('Reports')
@Controller('api/reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Roles(UserRoles.ADMIN)
  @Post()
  async create(@Body() data: CreateReportDto) {
    return await this.reportService.create(data);
  }

  @Roles(UserRoles.ADMIN)
  @UseInterceptors(PaginationInterceptor)
  @Get()
  async findAll() {
    return await this.reportService.findAll();
  }

  @Roles(UserRoles.ADMIN)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.reportService.findOne(id);
  }

  @Roles(UserRoles.ADMIN)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateReportDto) {
    return await this.reportService.update(id, data);
  }

  @Roles(UserRoles.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.reportService.remove(id);
  }
}
