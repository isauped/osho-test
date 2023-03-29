import { Injectable } from '@nestjs/common';
import { CreateIotDeviceActivityDto } from './dto/create-iot-device-activity.dto';
import { UpdateIotDeviceActivityDto } from './dto/update-iot-device-activity.dto';

@Injectable()
export class IotDeviceActivityService {
  create(createIotDeviceActivityDto: CreateIotDeviceActivityDto) {
    return 'This action adds a new iotDeviceActivity';
  }

  findAll() {
    return `This action returns all iotDeviceActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iotDeviceActivity`;
  }

  update(id: number, updateIotDeviceActivityDto: UpdateIotDeviceActivityDto) {
    return `This action updates a #${id} iotDeviceActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} iotDeviceActivity`;
  }
}
