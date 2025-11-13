import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitorStudentService } from './visitor-student.service';
import { CreateVisitorStudentDto } from './dto/create-visitor-student.dto';
import { UpdateVisitorStudentDto } from './dto/update-visitor-student.dto';

@Controller('visitorStudent')
export class VisitorStudentController {
  constructor(private readonly visitorStudentService: VisitorStudentService) {}

  @Post()
  create(@Body() createVisitorStudentDto: CreateVisitorStudentDto) {
    return this.visitorStudentService.create(createVisitorStudentDto);
    
  }



  @Get()
  findAll() {
    return this.visitorStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorStudentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitorStudentDto: UpdateVisitorStudentDto) {
    return this.visitorStudentService.update(+id, updateVisitorStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitorStudentService.remove(+id);
  }
}
