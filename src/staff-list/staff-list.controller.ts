import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { StaffListService } from './staff-list.service';
import { CreateStaffListDto } from './dto/create-staff-list.dto';
import { UpdateStaffListDto } from './dto/update-staff-list.dto';
import { StaffList } from './entities/staff-list.entity';

@Controller('stafflist')
export class StaffListController {
  constructor(private readonly staffListService: StaffListService) {}

  // @Post()
  // create(@Body() createStaffListDto: CreateStaffListDto) {
  //   return this.staffListService.create(createStaffListDto);
  // }

   @Post()
  async createStaff(@Body() createStaffDto: CreateStaffListDto) {
    const { staff_name, mobile_number } = createStaffDto;

    if (!staff_name) throw new BadRequestException('Staff name is missing');
    if (!mobile_number) throw new BadRequestException('Mobile number is missing');

    const user_id = await this.staffListService.generateNextUserId();
    await this.staffListService.addStaff(user_id, staff_name, mobile_number);

    return { message: 'Staff added successfully', user_id };
  }

  @Get()
  findAll() {
    return this.staffListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffListService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffListDto: UpdateStaffListDto) {
    return this.staffListService.update(id, updateStaffListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffListService.remove(id);
  }
}
