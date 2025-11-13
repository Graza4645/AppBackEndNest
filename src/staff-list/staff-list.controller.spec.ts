import { Test, TestingModule } from '@nestjs/testing';
import { StaffListController } from './staff-list.controller';
import { StaffListService } from './staff-list.service';

describe('StaffListController', () => {
  let controller: StaffListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffListController],
      providers: [StaffListService],
    }).compile();

    controller = module.get<StaffListController>(StaffListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
