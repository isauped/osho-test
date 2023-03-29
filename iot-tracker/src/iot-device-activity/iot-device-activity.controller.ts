import { Controller, Get, Param } from "@nestjs/common";
import { IotDeviceActivityService } from './iot-device-activity.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { IotDeviceActivityEntity } from './entities/iot-device-activity.entity';
import { ApiTags } from '@nestjs/swagger';
import { IotDeviceActivityResponseDto } from './dto/iot-device-activity-response.dto';
import { CreateIotDeviceActivityDto } from './dto/create-iot-device-activity.dto';
import { UpdateIotDeviceActivityDto } from './dto/update-iot-device-activity.dto';

@ApiTags('Device Activity')
@Crud({
  model: {
    type: IotDeviceActivityResponseDto,
  },
  dto: {
    create: CreateIotDeviceActivityDto,
    update: UpdateIotDeviceActivityDto,
  },
  query: {
    alwaysPaginate: true,
    limit: 100,
  },
  routes: {
    exclude: [
      'updateOneBase',
      'replaceOneBase',
      'deleteOneBase',
      'recoverOneBase',
    ],
  },
})
@Controller('iot-device-activity')
export class IotDeviceActivityController
  implements CrudController<IotDeviceActivityEntity>
{
  constructor(public service: IotDeviceActivityService) {}
  @Get('device/:deviceId')
  findOne(@Param('deviceId') deviceId: number) {
    return this.service.findLatest(deviceId);
  }
}
