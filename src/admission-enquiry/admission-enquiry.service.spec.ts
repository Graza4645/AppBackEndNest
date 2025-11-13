import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionEnquiryService } from './admission-enquiry.service';

describe('AdmissionEnquiryService', () => {
  let service: AdmissionEnquiryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmissionEnquiryService],
    }).compile();

    service = module.get<AdmissionEnquiryService>(AdmissionEnquiryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
