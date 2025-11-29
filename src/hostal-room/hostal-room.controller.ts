import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { HostalRoomService } from './hostal-room.service';
import { CreateHostalRoomDto } from './dto/create-hostal-room.dto';
import { UpdateHostalRoomDto } from './dto/update-hostal-room.dto';
import { HostalRoomEntiry } from './entities/hostal-room.entity';

@Controller('hostal-room')
export class HostalRoomController {
  constructor(private readonly hostalRoomService: HostalRoomService) {}

  @Post()
  async create(@Body() createHostalRoomDto: CreateHostalRoomDto): Promise<HostalRoomEntiry> {
    return await this.hostalRoomService.create(createHostalRoomDto);
  }

  @Get()
  async findAll(): Promise<HostalRoomEntiry[]> {
    return await this.hostalRoomService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<HostalRoomEntiry> {
    return await this.hostalRoomService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHostalRoomDto: UpdateHostalRoomDto,
  ): Promise<HostalRoomEntiry> {
    return await this.hostalRoomService.update(id, updateHostalRoomDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.hostalRoomService.remove(id);
  }
}
