import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PostalReceiveService } from './postal-receive.service';
import { CreatePostalReceiveDto } from './dto/create-postal-receive.dto';
import { UpdatePostalReceiveDto } from './dto/update-postal-receive.dto';

@Controller('postalreceive')
export class PostalReceiveController {
  constructor(private readonly postalReceiveService: PostalReceiveService) {}

  // ➕ Create Postal Receive
  @Post()
  async create(@Body() createPostalReceiveDto: CreatePostalReceiveDto) {
    return await this.postalReceiveService.create(createPostalReceiveDto);
  }

  // 📋 Get All Records
  @Get()
  async findAll() {
    return await this.postalReceiveService.findAll();
  }

  // 🔍 Get Record by ID
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.postalReceiveService.findOne(id);
  }

  // ✏️ Update Record
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostalReceiveDto: UpdatePostalReceiveDto,
  ) {
    return await this.postalReceiveService.update(id, updatePostalReceiveDto);
  }

  // 🗑️ Delete Record
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.postalReceiveService.remove(id);
  }
}
