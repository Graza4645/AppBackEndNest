import { Test, TestingModule } from '@nestjs/testing';
import { PostalReceiveController } from './postal-receive.controller';
import { PostalReceiveService } from './postal-receive.service';

describe('PostalReceiveController', () => {
  let controller: PostalReceiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostalReceiveController],
      providers: [PostalReceiveService],
    }).compile();

    controller = module.get<PostalReceiveController>(PostalReceiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
