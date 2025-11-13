// import { Injectable } from '@nestjs/common';
// import { CreateStaffListDto } from './dto/create-staff-list.dto';
// import { UpdateStaffListDto } from './dto/update-staff-list.dto';

// @Injectable()
// export class StaffListService {
//   create(createStaffListDto: CreateStaffListDto) {
//     return 'This action adds a new staffList';
//   }

//   findAll() {
//     return `This action returns all staffList`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} staffList`;
//   }

//   update(id: number, updateStaffListDto: UpdateStaffListDto) {
//     return `This action updates a #${id} staffList`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} staffList`;
//   }
// }


import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffList } from './entities/staff-list.entity';
import { CreateStaffListDto } from './dto/create-staff-list.dto';
import { UpdateStaffListDto } from './dto/update-staff-list.dto';

@Injectable()
export class StaffListService {
  constructor(
    @InjectRepository(StaffList)
    private readonly staffRepository: Repository<StaffList>,
  ) {}

  /**
   * Generate the next user_id (e.g. AMS00001 → AMS00002)
   */
  async generateNextUserId(): Promise<string> {
    const prefix = 'AMS';
    const lastStaff = await this.staffRepository
      .createQueryBuilder('staff')
      .orderBy('staff.user_id', 'DESC')
      .getOne();

    if (!lastStaff) return prefix + '00001';

    const lastNumber = parseInt(lastStaff.user_id.slice(3));
    const nextNumber = (lastNumber + 1).toString().padStart(5, '0');
    return prefix + nextNumber;
  }

  /**
   * Add staff with provided user_id
   */
  async addStaff(user_id: string, staff_name: string, mobile_number: string) {
    try {
      const newStaff = this.staffRepository.create({
        user_id,
        staff_name,
        mobile_number,
      });

      await this.staffRepository.save(newStaff);
      return newStaff;
    } catch (error) {
      console.error('Error adding staff:', error);
      throw new InternalServerErrorException('Failed to add staff');
    }
  }

  /**
   * Create a new staff record
   */
  async create(createStaffListDto: CreateStaffListDto) {
    try {
      const { staff_name, mobile_number } = createStaffListDto;
      const user_id = await this.generateNextUserId();

      const newStaff = this.staffRepository.create({
        user_id,
        staff_name,
        mobile_number,
      });

      await this.staffRepository.save(newStaff);
      return { message: 'Staff added successfully', user_id };
    } catch (error) {
      console.error('Error adding staff:', error);
      throw new InternalServerErrorException('Failed to add staff');
    }
  }

  /**
   * Fetch all staff records
   */
  async findAll() {
    try {
      return await this.staffRepository.find({
        order: { user_id: 'ASC' },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch staff list');
    }
  }

  /**
   * Fetch a single staff record by user_id
   */
  async findOne(user_id: string) {
    const staff = await this.staffRepository.findOne({ where: { user_id } });
    if (!staff) throw new NotFoundException(`Staff with ID ${user_id} not found`);
    return staff;
  }

  /**
   * Update staff details
   */
  async update(user_id: string, updateStaffListDto: UpdateStaffListDto) {
    const staff = await this.staffRepository.findOne({ where: { user_id } });
    if (!staff) throw new NotFoundException(`Staff with ID ${user_id} not found`);

    Object.assign(staff, updateStaffListDto);
    await this.staffRepository.save(staff);

    return { message: 'Staff updated successfully', user_id };
  }

  /**
   * Remove a staff record
   */
  async remove(user_id: string) {
    const result = await this.staffRepository.delete({ user_id });
    if (result.affected === 0)
      throw new NotFoundException(`Staff with ID ${user_id} not found`);

    return { message: 'Staff deleted successfully', user_id };
  }
}
