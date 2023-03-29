import { BaseEntity } from '../../config/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { IotDeviceEntity } from '../../iot-device/entities/iot-device.entity';

@Entity({
  name: 'IotDeviceActivity',
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

  @Expose()
  @IsOptional()
  @ManyToOne(
    (ty: typeof IotDeviceEntity) => IotDeviceEntity,
    (device: IotDeviceEntity) => device.IotDeviceActivity,
    {
      onDelete: 'CASCADE',
    },
  )
  public device?: IotDeviceEntity | null;
}
