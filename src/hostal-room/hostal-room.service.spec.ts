import { Test, TestingModule } from '@nestjs/testing';
import { HostalRoomService } from './hostal-room.service';

describe('HostalRoomService', () => {
  let service: HostalRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostalRoomService],
    }).compile();

    service = module.get<HostalRoomService>(HostalRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
