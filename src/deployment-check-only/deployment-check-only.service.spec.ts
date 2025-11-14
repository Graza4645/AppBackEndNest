import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';

describe('DeploymentCheckOnlyService', () => {
  let service: DeploymentCheckOnlyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeploymentCheckOnlyService],
    }).compile();

    service = module.get<DeploymentCheckOnlyService>(DeploymentCheckOnlyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
