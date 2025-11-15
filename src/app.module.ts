import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdmissionEnquiryModule } from './admission-enquiry/admission-enquiry.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../DataBase/data-source';
import { VisitorStudentModule } from './visitor-student/visitor-student.module';
import { VisitorstaffModule } from './visitorstaff/visitorstaff.module';
import { StaffListModule } from './staff-list/staff-list.module';
import { CallLogsModule } from './call-logs/call-logs.module';
import { PostalDispatchModule } from './postal-dispatch/postal-dispatch.module';
import { ComplaintModule } from './complaint/complaint.module';
import { PostalReceiveModule } from './postal-receive/postal-receive.module';
import { DeploymentCheckOnlyModule } from './deployment-check-only/deployment-check-only.module';
import { SupabaseModule } from './supabase/supabase.module';
import { Visitorstaff } from './visitorstaff/entities/visitorstaff.entity';
import { VisitorStudent } from './visitor-student/entities/visitor-student.entity';
import { AdmissionEnquiryEntity } from './admission-enquiry/entities/admission-enquiry.entity';
import { StaffList } from './staff-list/entities/staff-list.entity';
import { CallLog } from './call-logs/entities/call-log.entity';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...(process.env.USE_SUPABASE === 'true' ? {
        // Supabase connection from .env
        url: process.env.SUPABASE_DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      } : {
        // Local PostgreSQL connection from .env
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      }),
      entities: [
        Visitorstaff,
        VisitorStudent,
        AdmissionEnquiryEntity,
        StaffList,
        CallLog
      ],
      synchronize: true,
      logging: process.env.NODE_ENV !== 'production',
      extra: {
        connectionLimit: 1,
      }
    }),
    AdmissionEnquiryModule,
    VisitorStudentModule,
    VisitorstaffModule,
    StaffListModule,
    CallLogsModule,
    DeploymentCheckOnlyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
