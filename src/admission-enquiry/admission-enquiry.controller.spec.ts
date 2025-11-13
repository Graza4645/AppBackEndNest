import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionEnquiryController } from './admission-enquiry.controller';
import { AdmissionEnquiryService } from './admission-enquiry.service';

describe('AdmissionEnquiryController', () => {
  let controller: AdmissionEnquiryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionEnquiryController],
      providers: [AdmissionEnquiryService],
    }).compile();

    controller = module.get<AdmissionEnquiryController>(AdmissionEnquiryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
