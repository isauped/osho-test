import { Injectable } from '@nestjs/common';
import { CreateIotDeviceDto } from './dto/create-iot-device.dto';
import { UpdateIotDeviceDto } from './dto/update-iot-device.dto';

@Injectable()
export class IotDeviceService {
  create(createIotDeviceDto: CreateIotDeviceDto) {
    return 'This action adds a new iotDevice';
  }

  findAll() {
    return `This action returns all iotDevice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iotDevice`;
  }

  update(id: number, updateIotDeviceDto: UpdateIotDeviceDto) {
    return `This action updates a #${id} iotDevice`;
  }

  remove(id: number) {
    return `This action removes a #${id} iotDevice`;
  }
}
