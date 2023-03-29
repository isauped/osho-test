import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

export class CreateIotDeviceActivityDto {
  @ApiProperty()
  @Expose()
  @IsString()
  public deviceId: string;

  @ApiProperty()
  @Expose()
  @IsString()
  public activityDateTime?: Date;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  public deviceEnabled?: boolean;
}
