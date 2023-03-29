import { Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class CreateIotDeviceDto {
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
