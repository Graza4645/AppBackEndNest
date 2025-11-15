import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';
import { CreateDeploymentCheckOnlyDto } from './dto/create-deployment-check-only.dto';
import { UpdateDeploymentCheckOnlyDto } from './dto/update-deployment-check-only.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Controller('deployment')
export class DeploymentCheckOnlyController {
  constructor(
    private readonly deploymentCheckOnlyService: DeploymentCheckOnlyService,
    private readonly supabaseService: SupabaseService
  ) {}

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

  @Get('supabase-test')
  async testSupabase() {
    try {
      const { data, error } = await this.supabaseService.client
        .from('test')
        .select('*')
        .limit(1);
      
      return { 
        status: 'Supabase connected', 
        hasError: !!error,
        error: error?.message || null
      };
    } catch (err) {
      return { 
        status: 'Supabase connection failed', 
        error: err.message 
      };
    }
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
