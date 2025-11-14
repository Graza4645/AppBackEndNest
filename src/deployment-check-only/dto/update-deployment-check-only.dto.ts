import { PartialType } from '@nestjs/mapped-types';
import { CreateDeploymentCheckOnlyDto } from './create-deployment-check-only.dto';

export class UpdateDeploymentCheckOnlyDto extends PartialType(CreateDeploymentCheckOnlyDto) {}
