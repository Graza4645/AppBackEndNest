import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostelService } from './hostel.service';
import { HostelController } from './hostel.controller';
import { HostelEntity } from './entities/hostel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HostelEntity])],
  controllers: [HostelController],
  providers: [HostelService],
})
export class HostelModule {}
