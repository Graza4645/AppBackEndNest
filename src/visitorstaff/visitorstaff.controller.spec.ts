import { Test, TestingModule } from '@nestjs/testing';
import { VisitorstaffController } from './visitorstaff.controller';
import { VisitorstaffService } from './visitorstaff.service';

describe('VisitorstaffController', () => {
  let controller: VisitorstaffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitorstaffController],
      providers: [VisitorstaffService],
    }).compile();

    controller = module.get<VisitorstaffController>(VisitorstaffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
