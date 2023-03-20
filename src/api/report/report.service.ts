import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report) private reportRepository: Repository<Report>,
  ) {}

  async create(data: CreateReportDto): Promise<any> {
    const report = await this.reportRepository.create(data);

    await this.reportRepository.save(report);

    return report;
  }

  async update(id: string, data: UpdateReportDto) {
    await this.reportRepository.update(id, data);

    return await this.reportRepository.findOne({
      where: { id },
      relations: ['users'],
    });
  }

  async getReportByName(name: string) {
    return await this.reportRepository.findOne({ where: { name } });
  }

  async findAll() {
    return await this.reportRepository.findAndCount();
  }

  async findOne(id: string) {
    return await this.reportRepository.findBy({ id });
  }

  async remove(id: string) {
    await this.getRequestedReportOrFail(id);
    await this.reportRepository.delete(id);
    return { message: 'Report was deleted successfullty!' };
  }

  public async getRequestedReportOrFail(id: string) {
    const report = await this.reportRepository.findOne({ where: { id } });

    if (!report) {
      throw new HttpException('Report does not exist!', HttpStatus.NOT_FOUND);
    }

    return report;
  }
}
