import { Injectable } from '@nestjs/common';
import { CreateVisitorstaffDto } from './dto/create-visitorstaff.dto';
import { UpdateVisitorstaffDto } from './dto/update-visitorstaff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitorstaff } from './entities/visitorstaff.entity';

@Injectable()
export class VisitorstaffService {
  constructor(
    @InjectRepository(Visitorstaff)
    private readonly visitorstaffRepo: Repository<Visitorstaff>,
  ) {}

  async create(createVisitorstaffDto: CreateVisitorstaffDto): Promise<Visitorstaff> {
    const newVisitorstaff = this.visitorstaffRepo.create(createVisitorstaffDto);
    return await this.visitorstaffRepo.save(newVisitorstaff);
  }

  async findAll(): Promise<Visitorstaff[]> {
    return await this.visitorstaffRepo.find();
  }

  async findOne(id: number): Promise<Visitorstaff> {
    const visitorstaff = await this.visitorstaffRepo.findOne({ where: { id } });
    if (!visitorstaff) {
      throw new Error(`Visitorstaff with ID ${id} not found`);
    }
    return visitorstaff;
  }

  async update(id: number, updateVisitorstaffDto: UpdateVisitorstaffDto): Promise<Visitorstaff> {
    await this.visitorstaffRepo.update(id, updateVisitorstaffDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.visitorstaffRepo.delete(id);
    if (result.affected === 0) {
      throw new Error(`Visitorstaff with ID ${id} not found`);
    }
  }
}
