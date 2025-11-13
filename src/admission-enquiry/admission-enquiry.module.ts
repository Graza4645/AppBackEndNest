import { Module } from '@nestjs/common';
import { AdmissionEnquiryService } from './admission-enquiry.service';
import { AdmissionEnquiryController } from './admission-enquiry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmissionEnquiryEntity } from './entities/admission-enquiry.entity';

@Module({
  imports : [TypeOrmModule.forFeature([AdmissionEnquiryEntity])],
  controllers: [AdmissionEnquiryController],
  providers: [AdmissionEnquiryService],
})
export class AdmissionEnquiryModule {}
