import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';
import { CreateDeploymentCheckOnlyDto } from './dto/create-deployment-check-only.dto';
import { UpdateDeploymentCheckOnlyDto } from './dto/update-deployment-check-only.dto';

@Controller('deployment')
export class DeploymentCheckOnlyController {
  constructor(private readonly deploymentCheckOnlyService: DeploymentCheckOnlyService) {}

  @Post()
  create(@Body() createDeploymentCheckOnlyDto: CreateDeploymentCheckOnlyDto) {
    return this.deploymentCheckOnlyService.create(createDeploymentCheckOnlyDto);
  }

  @Get()
  findAll() {
    return { message: 'Deployment successful!', timestamp: new Date().toISOString() };
  }

  @Get('health')
  health() {
    return { status: 'OK', message: 'Server is running' };
  }

  @Get('env-check')
  envCheck() {
    return {
      nodeEnv: process.env.NODE_ENV,
      useSupabase: process.env.USE_SUPABASE,
      hasSupabaseUrl: !!process.env.SUPABASE_URL,
      hasSupabaseKey: !!process.env.SUPABASE_ANON_KEY
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deploymentCheckOnlyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeploymentCheckOnlyDto: UpdateDeploymentCheckOnlyDto) {
    return this.deploymentCheckOnlyService.update(+id, updateDeploymentCheckOnlyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deploymentCheckOnlyService.remove(+id);
  }
}
