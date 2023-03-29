import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BaseDto {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  isActive: boolean;

  @Expose()
  @ApiProperty()
  isArchived: boolean;

  @Expose()
  @ApiProperty()
  createDateTime: Date;

  @Expose()
  @ApiProperty()
  createdBy: string;

  @Expose()
  @ApiProperty()
  lastChangedDateTime: Date;

  @Expose()
  @ApiProperty()
  lastChangedBy: string;

  @Expose()
  @ApiProperty()
  internalComment: string | null;
}
