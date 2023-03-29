import { BaseDto } from '../../config/dto/base.dto';
import { Exclude, Expose } from 'class-transformer';
import { Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IotDeviceActivityResponseDto } from '../../iot-device-activity/dto/iot-device-activity-response.dto';

@Exclude()
export class IotDeviceResponseDto extends BaseDto {
  @Index()
  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  public name: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  public type: string;

  @ApiProperty()
  @Expose()
  @IsOptional()
  public activities?: IotDeviceActivityResponseDto[];
}
