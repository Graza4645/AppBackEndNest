import { Test, TestingModule } from '@nestjs/testing';
import { PostalReceiveService } from './postal-receive.service';

describe('PostalReceiveService', () => {
  let service: PostalReceiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostalReceiveService],
    }).compile();

    service = module.get<PostalReceiveService>(PostalReceiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
