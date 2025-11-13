import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffListService } from './staff-list.service';
import { StaffListController } from './staff-list.controller';
import { StaffList } from './entities/staff-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffList])],
  controllers: [StaffListController],
  providers: [StaffListService],
})
export class StaffListModule {}
