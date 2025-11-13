import { Injectable, ConflictException } from '@nestjs/common';
import { CreateAdmissionEnquiryDto } from './dto/create-admission-enquiry.dto';
import { UpdateAdmissionEnquiryDto } from './dto/update-admission-enquiry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdmissionEnquiryEntity } from './entities/admission-enquiry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdmissionEnquiryService {

 constructor(
  @InjectRepository(AdmissionEnquiryEntity)
  private  admissionEnquiryrepository : Repository<AdmissionEnquiryEntity>
 ){}

  async create(createAdmissionEnquiryDto: CreateAdmissionEnquiryDto) {
    try {
      const admissionEnquiry = this.admissionEnquiryrepository.create(createAdmissionEnquiryDto);
      return await this.admissionEnquiryrepository.save(admissionEnquiry);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.admissionEnquiryrepository.find();
  }

  async findOne(id: number) {
    return await this.admissionEnquiryrepository.findOne({ where: { id } });
  }

  async update(id: number, updateAdmissionEnquiryDto: UpdateAdmissionEnquiryDto) {
    await this.admissionEnquiryrepository.update(id, updateAdmissionEnquiryDto);
    return await this.admissionEnquiryrepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.admissionEnquiryrepository.delete(id);
  }
}
