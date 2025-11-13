import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdmissionEnquiryService } from './admission-enquiry.service';
import { CreateAdmissionEnquiryDto } from './dto/create-admission-enquiry.dto';
import { UpdateAdmissionEnquiryDto } from './dto/update-admission-enquiry.dto';

@Controller('admissionenquiry')
export class AdmissionEnquiryController {
  constructor(private readonly admissionEnquiryService: AdmissionEnquiryService) {}

 @Post()
 async create(@Body() createAdmissionEnquiryDto: CreateAdmissionEnquiryDto) {
    return await this.admissionEnquiryService.create(createAdmissionEnquiryDto);
  }

  @Get()
  findAll() {
    return this.admissionEnquiryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.admissionEnquiryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdmissionEnquiryDto: UpdateAdmissionEnquiryDto) {
    return this.admissionEnquiryService.update(+id, updateAdmissionEnquiryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.admissionEnquiryService.remove(+id);
  }
}
