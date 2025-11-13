import { Test, TestingModule } from '@nestjs/testing';
import { PostalDispatchService } from './postal-dispatch.service';

describe('PostalDispatchService', () => {
  let service: PostalDispatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostalDispatchService],
    }).compile();

    service = module.get<PostalDispatchService>(PostalDispatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
