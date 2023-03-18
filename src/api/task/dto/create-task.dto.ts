/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Status } from '../enums/status.enum';
import { Type } from '../enums/types.enum';

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsEnum(Type)
  @ApiProperty()
  type: Type;

  @IsEnum(Status)
  @ApiProperty()
  status: Status

  @IsString()
  @ApiProperty()
  deadline: string;

}