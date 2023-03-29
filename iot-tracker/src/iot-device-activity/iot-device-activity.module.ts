import { Module } from '@nestjs/common';
import { IotDeviceActivityService } from './iot-device-activity.service';
import { IotDeviceActivityController } from './iot-device-activity.controller';

@Module({
  controllers: [IotDeviceActivityController],
  providers: [IotDeviceActivityService]
})
export class IotDeviceActivityModule {}
