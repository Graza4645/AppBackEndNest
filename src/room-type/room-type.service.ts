import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomTypeEntity } from './entities/room-type.entity';

@Injectable()
export class RoomTypeService {
  constructor(
    @InjectRepository(RoomTypeEntity)
    private roomTypeRepository: Repository<RoomTypeEntity>
  ) {}

  async create(createRoomTypeDto: CreateRoomTypeDto): Promise<RoomTypeEntity> {
    const roomType = this.roomTypeRepository.create(createRoomTypeDto);
    return await this.roomTypeRepository.save(roomType);
  }

  async findAll(): Promise<RoomTypeEntity[]> {
    return await this.roomTypeRepository.find();
  }

  async findOne(id: number): Promise<RoomTypeEntity> {
    const roomType = await this.roomTypeRepository.findOne({ where: { id } });
    if (!roomType) {
      throw new NotFoundException(`Room type with ID ${id} not found`);
    }
    return roomType;
  }

  async update(id: number, updateRoomTypeDto: UpdateRoomTypeDto): Promise<RoomTypeEntity> {
    const result = await this.roomTypeRepository.update(id, updateRoomTypeDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Room type with ID ${id} not found`);
    }
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.roomTypeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Room type with ID ${id} not found`);
    }
  }
}
