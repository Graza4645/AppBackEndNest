import { Test, TestingModule } from '@nestjs/testing';
import { StaffListService } from './staff-list.service';

describe('StaffListService', () => {
  let service: StaffListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffListService],
    }).compile();

    service = module.get<StaffListService>(StaffListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
