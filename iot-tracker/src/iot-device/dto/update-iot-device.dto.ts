import { PartialType } from '@nestjs/mapped-types';
import { CreateIotDeviceDto } from './create-iot-device.dto';
import { Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
export class UpdateIotDeviceDto {
  @Index()
  @ApiProperty()
  @Expose()
  @IsString()
  public name: string;

  @ApiProperty()
  @Expose()
  @IsString()
  public type: string;
}
