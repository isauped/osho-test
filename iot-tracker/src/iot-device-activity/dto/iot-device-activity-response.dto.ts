import { BaseDto } from '../../config/dto/base.dto';
import { Exclude, Expose } from 'class-transformer';
import { Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IotDeviceResponseDto } from '../../iot-device/dto/iot-device-response.dto';

@Exclude()
export class IotDeviceActivityResponseDto extends BaseDto {
  @Index()
  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  public name: string;

  @Index()
  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  public type: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  public device?: IotDeviceResponseDto[];
}
