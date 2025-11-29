import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { HostelService } from './hostel.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { HostelEntity } from './entities/hostel.entity';

@Controller('hostel')
export class HostelController {
  constructor(private readonly hostelService: HostelService) {}

  @Post()
  async create(@Body() createHostelDto: CreateHostelDto): Promise<HostelEntity> {
    return await this.hostelService.create(createHostelDto);
  }

  @Get()
  async findAll(): Promise<HostelEntity[]> {
    return await this.hostelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<HostelEntity> {
    return await this.hostelService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHostelDto: UpdateHostelDto,
  ): Promise<HostelEntity> {
    return await this.hostelService.update(id, updateHostelDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.hostelService.remove(id);
  }
}
