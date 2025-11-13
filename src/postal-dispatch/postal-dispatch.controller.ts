// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { PostalDispatchService } from './postal-dispatch.service';
// import { CreatePostalDispatchDto } from './dto/create-postal-dispatch.dto';
// import { UpdatePostalDispatchDto } from './dto/update-postal-dispatch.dto';

// @Controller('postal-dispatch')
// export class PostalDispatchController {
//   constructor(private readonly postalDispatchService: PostalDispatchService) {}

//   @Post()
//   create(@Body() createPostalDispatchDto: CreatePostalDispatchDto) {
//     return this.postalDispatchService.create(createPostalDispatchDto);
//   }

//   @Get()
//   findAll() {
//     return this.postalDispatchService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.postalDispatchService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePostalDispatchDto: UpdatePostalDispatchDto) {
//     return this.postalDispatchService.update(+id, updatePostalDispatchDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.postalDispatchService.remove(+id);
//   }
// }



import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PostalDispatchService } from './postal-dispatch.service';
import { CreatePostalDispatchDto } from './dto/create-postal-dispatch.dto';
import { UpdatePostalDispatchDto } from './dto/update-postal-dispatch.dto';

@Controller('postaldispatch')
export class PostalDispatchController {
  constructor(private readonly postalDispatchService: PostalDispatchService) {}

  /**
   * 📦 Create a new postal dispatch record
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPostalDispatchDto: CreatePostalDispatchDto) {
    return this.postalDispatchService.create(createPostalDispatchDto);
  }

  /**
   * 📜 Get all postal dispatch records
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.postalDispatchService.findAll();
  }

  /**
   * 🔍 Get a single postal dispatch record by ID
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return this.postalDispatchService.findOne(+id);
  }

  /**
   * ✏️ Update postal dispatch record by ID
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updatePostalDispatchDto: UpdatePostalDispatchDto,
  ) {
    return this.postalDispatchService.update(+id, updatePostalDispatchDto);
  }

  /**
   * 🗑️ Delete postal dispatch record by ID
   */
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.postalDispatchService.remove(+id);
  }
}
