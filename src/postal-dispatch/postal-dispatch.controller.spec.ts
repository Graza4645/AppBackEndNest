import { Test, TestingModule } from '@nestjs/testing';
import { PostalDispatchController } from './postal-dispatch.controller';
import { PostalDispatchService } from './postal-dispatch.service';

describe('PostalDispatchController', () => {
  let controller: PostalDispatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostalDispatchController],
      providers: [PostalDispatchService],
    }).compile();

    controller = module.get<PostalDispatchController>(PostalDispatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
