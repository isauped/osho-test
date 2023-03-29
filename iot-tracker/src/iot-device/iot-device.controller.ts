import { Controller } from '@nestjs/common';
import { IotDeviceService } from './iot-device.service';
import { IotDeviceEntity } from './entities/iot-device.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { IotDeviceResponseDto } from './dto/iot-device-response.dto';
import { CreateIotDeviceDto } from './dto/create-iot-device.dto';
import { UpdateIotDeviceDto } from './dto/update-iot-device.dto';

@ApiTags('Devices')
@Crud({
  model: {
    type: IotDeviceResponseDto,
  },
  dto: {
    create: CreateIotDeviceDto,
    update: UpdateIotDeviceDto,
  },
  query: {
    alwaysPaginate: true,
    limit: 100,
    join: {
      IotDeviceActivity: {
        eager: true,
        alias: 'IotDeviceActivity',
      },
    },
  },
})
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
