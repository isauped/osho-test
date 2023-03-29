import { Module } from '@nestjs/common';
import { IotDeviceService } from './iot-device.service';
import { IotDeviceController } from './iot-device.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotDeviceEntity } from './entities/iot-device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IotDeviceEntity])],
  providers: [IotDeviceService],
  exports: [IotDeviceService],
  controllers: [IotDeviceController],
})
export class IotDeviceModule {}
