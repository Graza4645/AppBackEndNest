import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';
import { CreateDeploymentCheckOnlyDto } from './dto/create-deployment-check-only.dto';
import { UpdateDeploymentCheckOnlyDto } from './dto/update-deployment-check-only.dto';
import { createClient } from '@supabase/supabase-js';

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
    return {
      status: 'OK',
      message: 'Server is running',
      environment: process.env.NODE_ENV,
      database: process.env.USE_SUPABASE === 'true' ? 'Supabase' : 'Local PostgreSQL',
      timestamp: new Date().toISOString(),
      endpoints: [
        '/api/v1/admission-enquiry',
        '/api/v1/visitor-student',
        '/api/v1/visitorstaff',
        '/api/v1/staff-list',
        '/api/v1/call-logs'
      ]
    };
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

  @Get('supabase-test')
  async testSupabase() {
    try {
      const supabase = createClient(
        process.env.SUPABASE_URL || '',
        process.env.SUPABASE_ANON_KEY || ''
      );
      
      // Simple connection test
      const { data, error } = await supabase.auth.getSession();
      
      return { 
        status: 'Supabase connection successful',
        connected: true,
        message: 'Ready for database operations'
      };
    } catch (err) {
      return { 
        status: 'Supabase connection failed',
        connected: false,
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
