import { Module } from '@nestjs/common';
import { IotDeviceActivityService } from './iot-device-activity.service';
import { IotDeviceActivityController } from './iot-device-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotDeviceActivityEntity } from './entities/iot-device-activity.entity';
import { IotDeviceModule } from '../iot-device/iot-device.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([IotDeviceActivityEntity]),
    IotDeviceModule,
  ],
  providers: [IotDeviceActivityService],
  exports: [IotDeviceActivityService],
  controllers: [IotDeviceActivityController],
})
export class IotDeviceActivityModule {}
