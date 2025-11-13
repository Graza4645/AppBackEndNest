import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CallLog } from './entities/call-log.entity';
import { CreateCallLogDto } from './dto/create-call-log.dto';
import { UpdateCallLogDto } from './dto/update-call-log.dto';

@Injectable()
export class CallLogsService {
  constructor(
    @InjectRepository(CallLog)
    private readonly callLogRepository: Repository<CallLog>,
  ) {}

  // ✅ Create Call Log
  async create(createCallLogDto: CreateCallLogDto) {
    const newCallLog = this.callLogRepository.create(createCallLogDto);
    const savedLog = await this.callLogRepository.save(newCallLog);
    return {
      message: 'Phone Call Log saved successfully',
      data: savedLog,
    };
  }

  // ✅ Get all call logs
  async findAll() {
    return this.callLogRepository.find({
      order: { id: 'DESC' },
    });
  }

  // ✅ Get one by ID
  async findOne(id: number) {
    const log = await this.callLogRepository.findOne({ where: { id } });
    if (!log) throw new NotFoundException(`No call log found with ID ${id}`);
    return log;
  }

  // ✅ Update call log
  async update(id: number, updateCallLogDto: UpdateCallLogDto) {
    const existing = await this.callLogRepository.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`No call log found with ID ${id}`);

    await this.callLogRepository.update(id, updateCallLogDto);
    const updatedLog = await this.callLogRepository.findOne({ where: { id } });

    return {
      message: 'Phone Call Log updated successfully',
      data: updatedLog,
    };
  }

  // ✅ Delete call log
  async remove(id: number) {
    const existing = await this.callLogRepository.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`No call log found with ID ${id}`);

    await this.callLogRepository.delete(id);
    return { message: 'Phone Call Log deleted successfully' };
  }
}
