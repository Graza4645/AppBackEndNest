import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmissionEnquiryDto } from './create-admission-enquiry.dto';

export class UpdateAdmissionEnquiryDto extends PartialType(CreateAdmissionEnquiryDto) {}
