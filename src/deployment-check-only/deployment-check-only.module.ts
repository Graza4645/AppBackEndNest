import { Module } from '@nestjs/common';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';
import { DeploymentCheckOnlyController } from './deployment-check-only.controller';

@Module({
  controllers: [DeploymentCheckOnlyController],
  providers: [DeploymentCheckOnlyService],
})
export class DeploymentCheckOnlyModule {}
