import { Injectable } from '@nestjs/common';
import { CreateDeploymentCheckOnlyDto } from './dto/create-deployment-check-only.dto';
import { UpdateDeploymentCheckOnlyDto } from './dto/update-deployment-check-only.dto';

@Injectable()
export class DeploymentCheckOnlyService {
  create(createDeploymentCheckOnlyDto: CreateDeploymentCheckOnlyDto) {
    return 'This action adds a new deploymentCheckOnly';
  }

  findAll() {
    return `This action returns all deploymentCheckOnly`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deploymentCheckOnly`;
  }

  update(id: number, updateDeploymentCheckOnlyDto: UpdateDeploymentCheckOnlyDto) {
    return `This action updates a #${id} deploymentCheckOnly`;
  }

  remove(id: number) {
    return `This action removes a #${id} deploymentCheckOnly`;
  }
}
