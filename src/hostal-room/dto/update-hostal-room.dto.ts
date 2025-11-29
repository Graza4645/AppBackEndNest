import { PartialType } from '@nestjs/mapped-types';
import { CreateHostalRoomDto } from './create-hostal-room.dto';

export class UpdateHostalRoomDto extends PartialType(CreateHostalRoomDto) {}
