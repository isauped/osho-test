import { PartialType } from '@nestjs/swagger';
import { CreateIotDeviceActivityDto } from './create-iot-device-activity.dto';

export class UpdateIotDeviceActivityDto extends PartialType(CreateIotDeviceActivityDto) {}
