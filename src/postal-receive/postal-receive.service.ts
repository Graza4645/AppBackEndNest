import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostalReceive } from './entities/postal-receive.entity';
import { CreatePostalReceiveDto } from './dto/create-postal-receive.dto';
import { UpdatePostalReceiveDto } from './dto/update-postal-receive.dto';

@Injectable()
export class PostalReceiveService {
  constructor(
    @InjectRepository(PostalReceive)
    private readonly postalReceiveRepository: Repository<PostalReceive>,
  ) {}

  // ➕ Create Postal Receive Record
  async create(createPostalReceiveDto: CreatePostalReceiveDto) {
    try {
      const newRecord = this.postalReceiveRepository.create(createPostalReceiveDto);
      const savedRecord = await this.postalReceiveRepository.save(newRecord);
      return {
        message: 'Postal Receive record added successfully',
        data: savedRecord,
      };
    } catch (error) {
      console.error('Error creating postal receive record:', error);
      throw new InternalServerErrorException('Failed to add postal receive record');
    }
  }

  // 📋 Get All Records
  async findAll() {
    try {
      const records = await this.postalReceiveRepository.find({
        order: { id: 'DESC' },
      });
      return {
        message: 'Postal Receive records fetched successfully',
        data: records,
      };
    } catch (error) {
      console.error('Error fetching postal receive records:', error);
      throw new InternalServerErrorException('Failed to fetch postal receive records');
    }
  }

  // 🔍 Get Single Record by ID
  async findOne(id: number) {
    try {
      const record = await this.postalReceiveRepository.findOne({ where: { id } });
      if (!record) {
        return { message: `Postal Receive record with ID ${id} not found` };
      }
      return {
        message: 'Postal Receive record fetched successfully',
        data: record,
      };
    } catch (error) {
      console.error('Error fetching postal receive record:', error);
      throw new InternalServerErrorException('Failed to fetch postal receive record');
    }
  }

  // ✏️ Update Record
  async update(id: number, updatePostalReceiveDto: UpdatePostalReceiveDto) {
    try {
      const record = await this.postalReceiveRepository.findOne({ where: { id } });
      if (!record) {
        return { message: `Postal Receive record with ID ${id} not found` };
      }
      await this.postalReceiveRepository.update(id, updatePostalReceiveDto);
      const updatedRecord = await this.postalReceiveRepository.findOne({ where: { id } });
      return {
        message: 'Postal Receive record updated successfully',
        data: updatedRecord,
      };
    } catch (error) {
      console.error('Error updating postal receive record:', error);
      throw new InternalServerErrorException('Failed to update postal receive record');
    }
  }

  // 🗑️ Delete Record
  async remove(id: number) {
    try {
      const record = await this.postalReceiveRepository.findOne({ where: { id } });
      if (!record) {
        return { message: `Postal Receive record with ID ${id} not found` };
      }
      await this.postalReceiveRepository.delete(id);
      return { message: 'Postal Receive record deleted successfully' };
    } catch (error) {
      console.error('Error deleting postal receive record:', error);
      throw new InternalServerErrorException('Failed to delete postal receive record');
    }
  }
}
