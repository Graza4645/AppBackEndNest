import { Module } from '@nestjs/common';
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


@Module({
  imports: [/* TypeOrmModule.forRoot(dataSourceOptions), */ DeploymentCheckOnlyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
