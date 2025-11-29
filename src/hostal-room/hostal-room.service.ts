import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHostalRoomDto } from './dto/create-hostal-room.dto';
import { UpdateHostalRoomDto } from './dto/update-hostal-room.dto';
import { HostalRoomEntiry } from './entities/hostal-room.entity';

@Injectable()
export class HostalRoomService {
  constructor(
    @InjectRepository(HostalRoomEntiry)
    private hostalRoomRepository: Repository<HostalRoomEntiry>,
  ) {}

  async create(createHostalRoomDto: CreateHostalRoomDto): Promise<HostalRoomEntiry> {
    const hostalRoom = this.hostalRoomRepository.create({
      room_name: createHostalRoomDto.room_name,
      hostel: { id: createHostalRoomDto.hostel_id },
      room_type: { id: createHostalRoomDto.room_type_id },
      number_of_beds: createHostalRoomDto.number_of_beds,
      cost_per_bed: createHostalRoomDto.cost_per_bed,
      description: createHostalRoomDto.description,
    });
    return await this.hostalRoomRepository.save(hostalRoom);
  }

  async findAll(): Promise<HostalRoomEntiry[]> {
    return await this.hostalRoomRepository.find({ 
      relations: ['hostel', 'room_type'] 
    });
  }

  async findOne(id: number): Promise<HostalRoomEntiry> {
    const hostalRoom = await this.hostalRoomRepository.findOne({
      where: { id },
      relations: ['hostel', 'room_type'],
    });
    if (!hostalRoom) {
      throw new NotFoundException(`Hostal Room with ID ${id} not found`);
    }
    return hostalRoom;
  }

  async update(id: number, updateHostalRoomDto: UpdateHostalRoomDto): Promise<HostalRoomEntiry> {
    const hostalRoom = await this.findOne(id);
    
    if (updateHostalRoomDto.hostel_id) {
      hostalRoom.hostel = { id: updateHostalRoomDto.hostel_id } as any;
    }
    if (updateHostalRoomDto.room_type_id) {
      hostalRoom.room_type = { id: updateHostalRoomDto.room_type_id } as any;
    }
    
    Object.assign(hostalRoom, {
      room_name: updateHostalRoomDto.room_name ?? hostalRoom.room_name,
      number_of_beds: updateHostalRoomDto.number_of_beds ?? hostalRoom.number_of_beds,
      cost_per_bed: updateHostalRoomDto.cost_per_bed ?? hostalRoom.cost_per_bed,
      description: updateHostalRoomDto.description ?? hostalRoom.description,
    });
    
    return await this.hostalRoomRepository.save(hostalRoom);
  }

  async remove(id: number): Promise<void> {
    const hostalRoom = await this.findOne(id);
    await this.hostalRoomRepository.remove(hostalRoom);
  }
}
