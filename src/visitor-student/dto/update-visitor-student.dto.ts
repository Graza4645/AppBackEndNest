import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitorStudentDto } from './create-visitor-student.dto';

export class UpdateVisitorStudentDto extends PartialType(CreateVisitorStudentDto) {}
