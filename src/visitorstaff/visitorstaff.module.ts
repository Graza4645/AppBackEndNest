import { Module } from '@nestjs/common';
import { VisitorstaffService } from './visitorstaff.service';
import { VisitorstaffController } from './visitorstaff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitorstaff } from './entities/visitorstaff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Visitorstaff])],
  controllers: [VisitorstaffController],
  providers: [VisitorstaffService],
})
export class VisitorstaffModule {}
