import { Injectable } from '@nestjs/common';
import { IotDeviceEntity } from './entities/iot-device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class IotDeviceService extends TypeOrmCrudService<IotDeviceEntity> {
  constructor(@InjectRepository(IotDeviceEntity) repo) {
    super(repo);
  }
}
