import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CallLogsService } from './call-logs.service';
import { CreateCallLogDto } from './dto/create-call-log.dto';
import { UpdateCallLogDto } from './dto/update-call-log.dto';

@Controller('calllogs')
export class CallLogsController {
  constructor(private readonly callLogsService: CallLogsService) {}

  @Post()
  async create(@Body() createCallLogDto: CreateCallLogDto) {
    return await this.callLogsService.create(createCallLogDto);
  }

  @Get()
  async findAll() {
    return await this.callLogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.callLogsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCallLogDto: UpdateCallLogDto,
  ) {
    return await this.callLogsService.update(id, updateCallLogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.callLogsService.remove(id);
  }
}
