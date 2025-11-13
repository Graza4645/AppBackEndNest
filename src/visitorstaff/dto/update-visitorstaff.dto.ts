import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitorstaffDto } from './create-visitorstaff.dto';

export class UpdateVisitorstaffDto extends PartialType(CreateVisitorstaffDto) {}
