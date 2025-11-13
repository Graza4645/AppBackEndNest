import { Test, TestingModule } from '@nestjs/testing';
import { VisitorstaffService } from './visitorstaff.service';

describe('VisitorstaffService', () => {
  let service: VisitorstaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitorstaffService],
    }).compile();

    service = module.get<VisitorstaffService>(VisitorstaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
