import { Test, TestingModule } from '@nestjs/testing';
import { FrontOfficeSetUpController } from './front-office-set-up.controller';
import { FrontOfficeSetUpService } from './front-office-set-up.service';

describe('FrontOfficeSetUpController', () => {
  let controller: FrontOfficeSetUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontOfficeSetUpController],
      providers: [FrontOfficeSetUpService],
    }).compile();

    controller = module.get<FrontOfficeSetUpController>(FrontOfficeSetUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
