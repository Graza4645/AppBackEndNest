import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorStudentService } from './visitor-student.service';
import { VisitorStudentController } from './visitor-student.controller';
import { VisitorStudent } from './entities/visitor-student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitorStudent])],
  controllers: [VisitorStudentController],
  providers: [VisitorStudentService],
})
export class VisitorStudentModule {}
