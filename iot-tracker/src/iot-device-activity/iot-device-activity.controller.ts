import { Controller } from '@nestjs/common';
import { IotDeviceActivityService } from './iot-device-activity.service';
import { CrudController } from '@nestjsx/crud';
import { IotDeviceActivityEntity } from './entities/iot-device-activity.entity';

@Controller('iot-device-activity')
export class IotDeviceActivityController
  implements CrudController<IotDeviceActivityEntity>
{
  constructor(public service: IotDeviceActivityService) {}

  // @Post()
  // create(@Body() createIotDeviceActivityDto: CreateIotDeviceActivityDto) {
  //   return this.iotDeviceActivityService.create(createIotDeviceActivityDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.iotDeviceActivityService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.iotDeviceActivityService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIotDeviceActivityDto: UpdateIotDeviceActivityDto) {
  //   return this.iotDeviceActivityService.update(+id, updateIotDeviceActivityDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.iotDeviceActivityService.remove(+id);
  // }
}
