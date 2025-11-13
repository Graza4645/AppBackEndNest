import { Test, TestingModule } from '@nestjs/testing';
import { VisitorStudentService } from './visitor-student.service';

describe('VisitorStudentService', () => {
  let service: VisitorStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitorStudentService],
    }).compile();

    service = module.get<VisitorStudentService>(VisitorStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
