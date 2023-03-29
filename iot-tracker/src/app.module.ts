import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { IotDeviceModule } from './iot-device/iot-device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotDeviceActivityModule } from './iot-device-activity/iot-device-activity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    IotDeviceModule,
    IotDeviceActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
