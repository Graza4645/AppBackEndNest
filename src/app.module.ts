import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../DataBase/data-source';
import { DeploymentCheckOnlyModule } from './deployment-check-only/deployment-check-only.module';
import { AdmissionEnquiryModule } from './admission-enquiry/admission-enquiry.module';
import { VisitorStudentModule } from './visitor-student/visitor-student.module';
import { VisitorstaffModule } from './visitorstaff/visitorstaff.module';
import { StaffListModule } from './staff-list/staff-list.module';
import { CallLogsModule } from './call-logs/call-logs.module';
import { PostalDispatchModule } from './postal-dispatch/postal-dispatch.module';
import { ComplaintModule } from './complaint/complaint.module';
import { PostalReceiveModule } from './postal-receive/postal-receive.module';

const hasDatabase = process.env.DB_HOST || process.env.DATABASE_URL;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...(hasDatabase ? [TypeOrmModule.forRoot(dataSourceOptions)] : []),
    ...(hasDatabase ? [
      AdmissionEnquiryModule,
      VisitorStudentModule,
      VisitorstaffModule,
      StaffListModule,
      CallLogsModule,
      PostalDispatchModule,
      ComplaintModule,
      PostalReceiveModule,
    ] : []),
    DeploymentCheckOnlyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
