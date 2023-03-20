/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { FileType } from '../enums/filetypes.enum';

export class CreateReportDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  @ApiProperty()
  url: string;

  @IsEnum(FileType)
  @ApiProperty()
  type: FileType;
  description: any;
}

export class UpdateReportDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  @IsEnum(FileType)
  @ApiProperty()
  type: FileType;
  description: any;
}
