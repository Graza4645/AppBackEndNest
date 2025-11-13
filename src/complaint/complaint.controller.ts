// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ComplaintService } from './complaint.service';
// import { CreateComplaintDto } from './dto/create-complaint.dto';
// import { UpdateComplaintDto } from './dto/update-complaint.dto';

// @Controller('complaint')
// export class ComplaintController {
//   constructor(private readonly complaintService: ComplaintService) {}

//   @Post()
//   create(@Body() createComplaintDto: CreateComplaintDto) {
//     return this.complaintService.create(createComplaintDto);
//   }

//   @Get()
//   findAll() {
//     return this.complaintService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.complaintService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateComplaintDto: UpdateComplaintDto) {
//     return this.complaintService.update(+id, updateComplaintDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.complaintService.remove(+id);
//   }
// }




import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Controller('complaint')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Post()
  async create(@Body() createComplaintDto: CreateComplaintDto) {
    try {
      const result = await this.complaintService.create(createComplaintDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Complaint created successfully',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to create complaint',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const complaints = await this.complaintService.findAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Complaints fetched successfully',
        data: complaints,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to fetch complaints',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const complaint = await this.complaintService.findOne(+id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Complaint fetched successfully',
        data: complaint,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode:
            error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'Failed to fetch complaint',
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateComplaintDto: UpdateComplaintDto,
  ) {
    try {
      const updated = await this.complaintService.update(+id, updateComplaintDto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Complaint updated successfully',
        data: updated,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode:
            error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'Failed to update complaint',
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const removed = await this.complaintService.remove(+id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Complaint deleted successfully',
        data: removed,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode:
            error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'Failed to delete complaint',
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
