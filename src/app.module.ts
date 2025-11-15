import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmissionEnquiryModule } from './admission-enquiry/admission-enquiry.module';
import { VisitorStudentModule } from './visitor-student/visitor-student.module';
import { VisitorstaffModule } from './visitorstaff/visitorstaff.module';
import { StaffListModule } from './staff-list/staff-list.module';
import { CallLogsModule } from './call-logs/call-logs.module';
import { PostalDispatchModule } from './postal-dispatch/postal-dispatch.module';
import { ComplaintModule } from './complaint/complaint.module';
import { PostalReceiveModule } from './postal-receive/postal-receive.module';
import { DeploymentCheckOnlyModule } from './deployment-check-only/deployment-check-only.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl: { rejectUnauthorized: false },
      extra: {
        connectionLimit: 1,
        acquireTimeout: 60000,
        timeout: 60000,
        idleTimeoutMillis: 30000,
      },
    }),
    AdmissionEnquiryModule,
    VisitorStudentModule,
    VisitorstaffModule,
    StaffListModule,
    CallLogsModule,
    PostalDispatchModule,
    ComplaintModule,
    PostalReceiveModule,
    DeploymentCheckOnlyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}