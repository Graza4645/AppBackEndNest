import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';

@Controller('room_type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    const data = await this.roomTypeService.create(createRoomTypeDto);
    return { message: 'Room type created successfully', data };
  }

  @Get()
  async findAll() {
    const data = await this.roomTypeService.findAll();
    return { message: 'Room types retrieved successfully', data };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.roomTypeService.findOne(+id);
      return { message: 'Room type retrieved successfully', data };
    } catch (error) {
      return { message: error.message, data: null };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoomTypeDto: UpdateRoomTypeDto) {
    try {
      const data = await this.roomTypeService.update(+id, updateRoomTypeDto);
      return { message: 'Room type updated successfully', data };
    } catch (error) {
      return { message: error.message, data: null };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.roomTypeService.remove(+id);
      return { message: 'Room type deleted successfully' };
    } catch (error) {
      return { message: error.message };
    }
  }
}
