import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { VisitorstaffService } from './visitorstaff.service';
import { CreateVisitorstaffDto } from './dto/create-visitorstaff.dto';
import { UpdateVisitorstaffDto } from './dto/update-visitorstaff.dto';

@Controller('visitorstaff')
export class VisitorstaffController {
  constructor(private readonly visitorstaffService: VisitorstaffService) {}

   
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createVisitorstaffDto: CreateVisitorstaffDto) {
    const data = await this.visitorstaffService.create(createVisitorstaffDto);
    return { message: 'Visitor staff added successfully', data };
  }

  @Get()
  async findAll() {
    const data = await this.visitorstaffService.findAll();
    return { message: 'Visitor staff retrieved successfully', data };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.visitorstaffService.findOne(+id);
      return { message: 'Visitor staff retrieved successfully', data };
    } catch (error) {
      return { message: error.message, data: null };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVisitorstaffDto: UpdateVisitorstaffDto) {
    try {
      const data = await this.visitorstaffService.update(+id, updateVisitorstaffDto);
      return { message: 'Visitor staff updated successfully', data };
    } catch (error) {
      return { message: error.message, data: null };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.visitorstaffService.remove(+id);
      return { message: 'Visitor staff deleted successfully' };
    } catch (error) {
      return { message: error.message };
    }
  }
}
