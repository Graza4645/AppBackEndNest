import { Test, TestingModule } from '@nestjs/testing';
import { FrontOfficeSetUpService } from './front-office-set-up.service';

describe('FrontOfficeSetUpService', () => {
  let service: FrontOfficeSetUpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrontOfficeSetUpService],
    }).compile();

    service = module.get<FrontOfficeSetUpService>(FrontOfficeSetUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
