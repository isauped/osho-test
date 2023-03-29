import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IotDeviceService } from './iot-device.service';
import { CreateIotDeviceDto } from './dto/create-iot-device.dto';
import { UpdateIotDeviceDto } from './dto/update-iot-device.dto';
import { IotDeviceEntity } from './entities/iot-device.entity';
import { CrudController } from '@nestjsx/crud';

@Controller('iot-device')
export class IotDeviceController implements CrudController<IotDeviceEntity> {
  constructor(public service: IotDeviceService) {}

  // @Post()
  // create(@Body() createIotDeviceDto: CreateIotDeviceDto) {
  //   return this.service.create(createIotDeviceDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.service.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.service.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateIotDeviceDto: UpdateIotDeviceDto,
  // ) {
  //   return this.service.update(+id, updateIotDeviceDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.service.remove(+id);
  // }
}
