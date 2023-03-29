import { BaseEntity } from '../../config/entities/base.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { IotDeviceActivityEntity } from '../../iot-device-activity/entities/iot-device-activity.entity';

@Entity({
  name: 'IotDevice',
  orderBy: {
    id: `ASC`,
  },
})
export class IotDeviceEntity extends BaseEntity {
  @Expose()
  @IsString()
  @IsOptional()
  @Column({
    nullable: true,
  })
  // TODO @bruno type has to be reflect a proper entity or enum in the future
  public type?: string;

  @Index()
  @Expose()
  @IsString()
  @Column({
    nullable: true,
  })
  @IsOptional()
  public name: string;

  @Expose()
  @IsOptional()
  @OneToMany(
    (ty: typeof IotDeviceActivityEntity) => IotDeviceActivityEntity,
    (lineItems: IotDeviceActivityEntity) => lineItems.device,
    {
      eager: true,
      cascade: true,
      onDelete: 'CASCADE',
  })
  public IotDeviceActivity?: IotDeviceActivityEntity[];
}
