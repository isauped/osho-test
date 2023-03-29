import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IotDeviceModule } from './iot-device/iot-device.module';

@Module({
  imports: [IotDeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
