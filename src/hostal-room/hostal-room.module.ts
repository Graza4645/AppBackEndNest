import { Module } from '@nestjs/common';
import { HostalRoomService } from './hostal-room.service';
import { HostalRoomController } from './hostal-room.controller';
import { HostalRoomEntity } from './entities/hostal-room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HostalRoomEntity])],
  controllers: [HostalRoomController],
  providers: [HostalRoomService],
})
export class HostalRoomModule {}
