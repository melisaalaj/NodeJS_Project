/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '../enums/status.enum';
import { Type } from '../enums/types.enum';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsEnum(Type)
  @IsOptional()
  @ApiProperty()
  type: Type;

  @IsString()
  @IsOptional()
  @ApiProperty()
  deadline: string;

  @IsEnum(Status)
  @IsOptional()
  @ApiProperty()
  status: Status;
}
