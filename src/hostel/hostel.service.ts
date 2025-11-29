import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { HostelEntity } from './entities/hostel.entity';

@Injectable()
export class HostelService {
  constructor(
    @InjectRepository(HostelEntity)
    private hostelRepository: Repository<HostelEntity>,
  ) {}

  async create(createHostelDto: CreateHostelDto): Promise<HostelEntity> {
    const hostel = this.hostelRepository.create({
      hostel_name: createHostelDto.hostel_name,
      room_type: { id: createHostelDto.room_type_id },
      address: createHostelDto.address,
      intake: createHostelDto.intake,
      description: createHostelDto.description,
    });
    return await this.hostelRepository.save(hostel);
  }

  async findAll(): Promise<HostelEntity[]> {
    return await this.hostelRepository.find({ relations: ['room_type'] });
  }

  async findOne(id: number): Promise<HostelEntity> {
    const hostel = await this.hostelRepository.findOne({
      where: { id },
      relations: ['room_type'],
    });
    if (!hostel) {
      throw new NotFoundException(`Hostel with ID ${id} not found`);
    }
    return hostel;
  }

  async update(id: number, updateHostelDto: UpdateHostelDto): Promise<HostelEntity> {
    const hostel = await this.findOne(id);
    
    if (updateHostelDto.room_type_id) {
      hostel.room_type = { id: updateHostelDto.room_type_id } as any;
    }
    
    Object.assign(hostel, {
      hostel_name: updateHostelDto.hostel_name ?? hostel.hostel_name,
      address: updateHostelDto.address ?? hostel.address,
      intake: updateHostelDto.intake ?? hostel.intake,
      description: updateHostelDto.description ?? hostel.description,
    });
    
    return await this.hostelRepository.save(hostel);
  }

  async remove(id: number): Promise<void> {
    const hostel = await this.findOne(id);
    await this.hostelRepository.remove(hostel);
  }
}
