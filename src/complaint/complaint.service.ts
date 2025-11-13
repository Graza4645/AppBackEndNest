// import { Injectable } from '@nestjs/common';
// import { CreateComplaintDto } from './dto/create-complaint.dto';
// import { UpdateComplaintDto } from './dto/update-complaint.dto';

// @Injectable()
// export class ComplaintService {
//   create(createComplaintDto: CreateComplaintDto) {
//     return 'This action adds a new complaint';
//   }

//   findAll() {
//     return `This action returns all complaint`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} complaint`;
//   }

//   update(id: number, updateComplaintDto: UpdateComplaintDto) {
//     return `This action updates a #${id} complaint`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} complaint`;
//   }
// }



import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Complaint } from './entities/complaint.entity';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(Complaint)
    private readonly complaintRepository: Repository<Complaint>,
  ) {}

  async create(createComplaintDto: CreateComplaintDto) {
    const complaint = this.complaintRepository.create(createComplaintDto);
    return await this.complaintRepository.save(complaint);
  }

  async findAll() {
    return await this.complaintRepository.find();
  }

  async findOne(id: number) {
    const complaint = await this.complaintRepository.findOne({ where: { id } });
    if (!complaint) {
      throw new NotFoundException(`Complaint with ID ${id} not found`);
    }
    return complaint;
  }

  async update(id: number, updateComplaintDto: UpdateComplaintDto) {
    const complaint = await this.complaintRepository.preload({
      id,
      ...updateComplaintDto,
    });
    if (!complaint) {
      throw new NotFoundException(`Complaint with ID ${id} not found`);
    }
    return await this.complaintRepository.save(complaint);
  }

  async remove(id: number) {
    const complaint = await this.findOne(id);
    return await this.complaintRepository.remove(complaint);
  }
}
