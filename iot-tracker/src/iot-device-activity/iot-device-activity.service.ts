import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { IotDeviceActivityEntity } from './entities/iot-device-activity.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IotDeviceActivityService extends TypeOrmCrudService<IotDeviceActivityEntity> {
  constructor(@InjectRepository(IotDeviceActivityEntity) repo) {
    super(repo);
  }
}
