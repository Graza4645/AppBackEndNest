import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentCheckOnlyController } from './deployment-check-only.controller';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';

describe('DeploymentCheckOnlyController', () => {
  let controller: DeploymentCheckOnlyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeploymentCheckOnlyController],
      providers: [DeploymentCheckOnlyService],
    }).compile();

    controller = module.get<DeploymentCheckOnlyController>(DeploymentCheckOnlyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
