import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VisitorstaffModule } from './visitorstaff/visitorstaff.module';
import { DeploymentCheckOnlyModule } from './deployment-check-only/deployment-check-only.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    VisitorstaffModule,
    DeploymentCheckOnlyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
