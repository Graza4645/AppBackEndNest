import { Injectable } from '@nestjs/common';
import { CreateVisitorStudentDto } from './dto/create-visitor-student.dto';
import { UpdateVisitorStudentDto } from './dto/update-visitor-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitorStudent } from './entities/visitor-student.entity';

@Injectable()
export class VisitorStudentService {
 
    constructor(
    @InjectRepository(VisitorStudent)
    private readonly visitorRepo: Repository<VisitorStudent>,
  ) {}

 async create(createVisitorStudentDto: CreateVisitorStudentDto): Promise<VisitorStudent> {
    const newVisitor = this.visitorRepo.create(createVisitorStudentDto);
    return await this.visitorRepo.save(newVisitor);
  }

  async findAll() {
    return await this.visitorRepo.find();
  }

  async findOne(id: number): Promise<VisitorStudent | null> {
    return await this.visitorRepo.findOne({ where: { id } });
  }

  async update(id: number, updateVisitorStudentDto: UpdateVisitorStudentDto): Promise<VisitorStudent | null> {
    await this.visitorRepo.update(id, updateVisitorStudentDto);
    return await this.visitorRepo.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.visitorRepo.delete(id);
  }
}
