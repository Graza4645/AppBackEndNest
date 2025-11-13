// import { Injectable } from '@nestjs/common';
// import { CreatePostalDispatchDto } from './dto/create-postal-dispatch.dto';
// import { UpdatePostalDispatchDto } from './dto/update-postal-dispatch.dto';

// @Injectable()
// export class PostalDispatchService {
//   create(createPostalDispatchDto: CreatePostalDispatchDto) {
//     return 'This action adds a new postalDispatch';
//   }

//   findAll() {
//     return `This action returns all postalDispatch`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} postalDispatch`;
//   }

//   update(id: number, updatePostalDispatchDto: UpdatePostalDispatchDto) {
//     return `This action updates a #${id} postalDispatch`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} postalDispatch`;
//   }
// }





import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostalDispatch } from './entities/postal-dispatch.entity';
import { CreatePostalDispatchDto } from './dto/create-postal-dispatch.dto';
import { UpdatePostalDispatchDto } from './dto/update-postal-dispatch.dto';

@Injectable()
export class PostalDispatchService {
  constructor(
    @InjectRepository(PostalDispatch)
    private readonly postalDispatchRepository: Repository<PostalDispatch>,
  ) {}

  async create(createPostalDispatchDto: CreatePostalDispatchDto) {
    try {
      const newDispatch = this.postalDispatchRepository.create(createPostalDispatchDto);
      const savedDispatch = await this.postalDispatchRepository.save(newDispatch);
      return {
        success: true,
        message: 'Document uploaded successfully',
        data: savedDispatch,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while saving postal dispatch data');
    }
  }

  async findAll() {
    try {
      const result = await this.postalDispatchRepository.find();
      return {
        success: true,
        message: 'Postal dispatch records fetched successfully',
        data: result,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error fetching postal dispatch data');
    }
  }

  async findOne(id: number) {
    const record = await this.postalDispatchRepository.findOneBy({ id });
    if (!record) {
      throw new NotFoundException(`Postal dispatch record with ID ${id} not found`);
    }
    return {
      success: true,
      message: 'Postal dispatch record fetched successfully',
      data: record,
    };
  }

  async update(id: number, updatePostalDispatchDto: UpdatePostalDispatchDto) {
    const existing = await this.postalDispatchRepository.findOneBy({ id });
    if (!existing) {
      throw new NotFoundException(`Postal dispatch record with ID ${id} not found`);
    }

    try {
      await this.postalDispatchRepository.update(id, updatePostalDispatchDto);
      const updatedRecord = await this.postalDispatchRepository.findOneBy({ id });
      return {
        success: true,
        message: 'Postal dispatch record updated successfully',
        data: updatedRecord,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while updating postal dispatch data');
    }
  }

  async remove(id: number) {
    const existing = await this.postalDispatchRepository.findOneBy({ id });
    if (!existing) {
      throw new NotFoundException(`Postal dispatch record with ID ${id} not found`);
    }

    try {
      await this.postalDispatchRepository.delete(id);
      return {
        success: true,
        message: 'Postal dispatch record deleted successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Error while deleting postal dispatch data');
    }
  }
}

