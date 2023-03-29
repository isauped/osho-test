import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { IotDeviceActivityEntity } from './entities/iot-device-activity.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IotDeviceActivityService extends TypeOrmCrudService<IotDeviceActivityEntity> {
  constructor(@InjectRepository(IotDeviceActivityEntity) repo) {
    super(repo);
  }

  public async findLatest(deviceId: string): Promise<IotDeviceActivityEntity> {
    console.log(
      `IotDeviceActivityService - findLatest - deviceId Id ${deviceId}`,
    );
    return this.repo
      .createQueryBuilder('activities')
      .select('activities')
      .where('activities.deviceId = :deviceId', { deviceId })
      .orderBy('activities.activityDateTime', 'DESC')
      .getOne();
  }
}
