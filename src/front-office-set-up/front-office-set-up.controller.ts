import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FrontOfficeSetUpService } from './front-office-set-up.service';
import { CreateFrontOfficePurposeDto } from './dto/create-front-office-purpose.dto';
import { CreateFrontOfficeComplainTypeDto } from './dto/create-front-office-complain-type.dto';
import { CreateFrontOfficeSourceDto } from './dto/create-front-office-source.dto';
import { CreateFrontOfficeReferenceDto } from './dto/create-front-office-reference.dto';
import { UpdateFrontOfficePurposeDto } from './dto/update-front-office-purpose.dto';
import { UpdateFrontOfficeComplainTypeDto } from './dto/update-front-office-complain-type.dto';
import { UpdateFrontOfficeSourceDto } from './dto/update-front-office-source.dto';
import { UpdateFrontOfficeReferenceDto } from './dto/update-front-office-reference.dto';

@Controller('')
export class FrontOfficeSetUpController {
  constructor(private readonly frontOfficeSetUpService: FrontOfficeSetUpService) {}

  // PURPOSE CRUD
  @Post('addpurpose')
  async createPurpose(@Body() createDto: CreateFrontOfficePurposeDto) {
    return await this.frontOfficeSetUpService.createPurpose(createDto);
  }

  @Get('addpurpose')
  async findAllPurpose() {
    return await this.frontOfficeSetUpService.findAllPurpose();
  }

  @Get('addpurpose/:id')
  async findOnePurpose(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.findOnePurpose(id);
  }

  @Patch('addpurpose/:id')
  async updatePurpose(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateFrontOfficePurposeDto) {
    return await this.frontOfficeSetUpService.updatePurpose(id, updateDto);
  }

  @Delete('addpurpose/:id')
  async removePurpose(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.removePurpose(id);
  }

  // COMPLAINT CRUD
  @Post('addcomplaint')
  async createComplaint(@Body() createDto: CreateFrontOfficeComplainTypeDto) {
    return await this.frontOfficeSetUpService.createComplaint(createDto);
  }

  @Get('addcomplaint')
  async findAllComplaint() {
    return await this.frontOfficeSetUpService.findAllComplaint();
  }

  @Get('addcomplaint/:id')
  async findOneComplaint(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.findOneComplaint(id);
  }

  @Patch('addcomplaint/:id')
  async updateComplaint(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateFrontOfficeComplainTypeDto) {
    return await this.frontOfficeSetUpService.updateComplaint(id, updateDto);
  }

  @Delete('addcomplaint/:id')
  async removeComplaint(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.removeComplaint(id);
  }

  // SOURCE CRUD
  @Post('addsource')
  async createSource(@Body() createDto: CreateFrontOfficeSourceDto) {
    return await this.frontOfficeSetUpService.createSource(createDto);
  }

  @Get('addsource')
  async findAllSource() {
    return await this.frontOfficeSetUpService.findAllSource();
  }

  @Get('addsource/:id')
  async findOneSource(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.findOneSource(id);
  }

  @Patch('addsource/:id')
  async updateSource(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateFrontOfficeSourceDto) {
    return await this.frontOfficeSetUpService.updateSource(id, updateDto);
  }

  @Delete('addsource/:id')
  async removeSource(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.removeSource(id);
  }

  // REFERENCE CRUD
  @Post('addreference')
  async createReference(@Body() createDto: CreateFrontOfficeReferenceDto) {
    return await this.frontOfficeSetUpService.createReference(createDto);
  }

  @Get('addreference')
  async findAllReference() {
    return await this.frontOfficeSetUpService.findAllReference();
  }

  @Get('addreference/:id')
  async findOneReference(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.findOneReference(id);
  }

  @Patch('addreference/:id')
  async updateReference(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateFrontOfficeReferenceDto) {
    return await this.frontOfficeSetUpService.updateReference(id, updateDto);
  }

  @Delete('addreference/:id')
  async removeReference(@Param('id', ParseIntPipe) id: number) {
    return await this.frontOfficeSetUpService.removeReference(id);
  }
}
