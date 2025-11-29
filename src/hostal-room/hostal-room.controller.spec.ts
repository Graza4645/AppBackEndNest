import { Test, TestingModule } from '@nestjs/testing';
import { HostalRoomController } from './hostal-room.controller';
import { HostalRoomService } from './hostal-room.service';

describe('HostalRoomController', () => {
  let controller: HostalRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostalRoomController],
      providers: [HostalRoomService],
    }).compile();

    controller = module.get<HostalRoomController>(HostalRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
