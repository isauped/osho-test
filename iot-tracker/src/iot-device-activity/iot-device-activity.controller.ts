import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IotDeviceActivityService } from './iot-device-activity.service';
import { CreateIotDeviceActivityDto } from './dto/create-iot-device-activity.dto';
import { UpdateIotDeviceActivityDto } from './dto/update-iot-device-activity.dto';

@Controller('iot-device-activity')
export class IotDeviceActivityController {
  constructor(private readonly iotDeviceActivityService: IotDeviceActivityService) {}

  @Post()
  create(@Body() createIotDeviceActivityDto: CreateIotDeviceActivityDto) {
    return this.iotDeviceActivityService.create(createIotDeviceActivityDto);
  }

  @Get()
  findAll() {
    return this.iotDeviceActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iotDeviceActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIotDeviceActivityDto: UpdateIotDeviceActivityDto) {
    return this.iotDeviceActivityService.update(+id, updateIotDeviceActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iotDeviceActivityService.remove(+id);
  }
}
