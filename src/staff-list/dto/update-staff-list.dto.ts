import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffListDto } from './create-staff-list.dto';

export class UpdateStaffListDto extends PartialType(CreateStaffListDto) {}
