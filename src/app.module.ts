import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DeploymentCheckOnlyModule } from './deployment-check-only/deployment-check-only.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DeploymentCheckOnlyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
