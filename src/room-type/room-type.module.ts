import { Module } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { RoomTypeController } from './room-type.controller';
import { RoomTypeEntity } from './entities/room-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([RoomTypeEntity])],
  controllers: [RoomTypeController],
  providers: [RoomTypeService],
})
export class RoomTypeModule {}
