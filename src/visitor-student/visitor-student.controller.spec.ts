import { Test, TestingModule } from '@nestjs/testing';
import { VisitorStudentController } from './visitor-student.controller';
import { VisitorStudentService } from './visitor-student.service';

describe('VisitorStudentController', () => {
  let controller: VisitorStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitorStudentController],
      providers: [VisitorStudentService],
    }).compile();

    controller = module.get<VisitorStudentController>(VisitorStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
