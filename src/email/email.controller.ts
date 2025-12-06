import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailPdfDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  create(@Body() createEmailDto: CreateEmailPdfDto) {
    return this.emailService.create(createEmailDto);
    // return createEmailDto;
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
    return this.emailService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailService.remove(+id);
  }
}
