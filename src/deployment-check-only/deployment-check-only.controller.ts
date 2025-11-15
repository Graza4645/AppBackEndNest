import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeploymentCheckOnlyService } from './deployment-check-only.service';
import { CreateDeploymentCheckOnlyDto } from './dto/create-deployment-check-only.dto';
import { UpdateDeploymentCheckOnlyDto } from './dto/update-deployment-check-only.dto';
<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
=======
// import { createClient } from '@supabase/supabase-js'; // Uncomment after installing supabase
>>>>>>> 2c7be67d64ad3a4dc06ce85cc7c4e9afdb926f77

@Controller('deployment')
export class DeploymentCheckOnlyController {
  constructor(
    private readonly deploymentCheckOnlyService: DeploymentCheckOnlyService,
    @InjectDataSource() private dataSource: DataSource
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
  async health() {
    try {
      await this.dataSource.query('SELECT 1');
      return {
        status: 'OK',
        message: 'Server is running',
        database: 'Connected ✅',
        dbType: this.dataSource.options.type,
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
        endpoints: [
          '/api/v1/admission-enquiry',
          '/api/v1/visitor-student',
          '/api/v1/visitorstaff',
          '/api/v1/staff-list',
          '/api/v1/call-logs'
        ]
      };
    } catch (error) {
      return {
        status: 'ERROR',
        message: 'Database connection failed',
        database: 'Disconnected ❌',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
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
