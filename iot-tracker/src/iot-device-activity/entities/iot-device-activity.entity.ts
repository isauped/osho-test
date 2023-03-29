import { BaseEntity } from '../../config/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Expose } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";
import { IotDeviceEntity } from '../../iot-device/entities/iot-device.entity';

@Entity({
  name: 'activities',
  orderBy: {
    activityDateTime: `DESC`,
  },
})
export class IotDeviceActivityEntity extends BaseEntity {
  @Expose()
  @IsBoolean()
  @Column({
    type: `boolean`,
  })
  public deviceEnabled?: boolean;

  @Expose()
  @Column({
    nullable: false,
    type: 'timestamptz',
  })
  public activityDateTime?: Date;

  @IsString()
  @Column({
    nullable: false,
  })
  public deviceId: string;

  @Expose()
  @IsOptional()
  @ManyToOne(
    (ty: typeof IotDeviceEntity) => IotDeviceEntity,
    (device: IotDeviceEntity) => device.activities,
    {
      onDelete: 'CASCADE',
    },
  )
  public device?: IotDeviceEntity | null;
}
