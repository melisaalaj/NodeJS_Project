/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Type } from '../enums/types.enum';

export class CreateProjectDto {
  @IsString()
  @ApiProperty()
  url: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsEnum(Type)
  @ApiProperty()
  type: Type;
  description: any;
}