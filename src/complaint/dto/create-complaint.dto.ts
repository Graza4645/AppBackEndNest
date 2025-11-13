import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateComplaintDto {
  @IsNotEmpty({ message: 'Complaint type is required' })
  @IsString({ message: 'Complaint type must be a string' })
  complaint_type: string;

  @IsNotEmpty({ message: 'Source is required' })
  @IsString({ message: 'Source must be a string' })
  source: string;

  @IsNotEmpty({ message: 'Complain by is required' })
  @IsString({ message: 'Complain by must be a string' })
  complain_by: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @IsString({ message: 'Phone must be a string' })
  phone: string;

  @IsNotEmpty({ message: 'Date is required' })
  @IsString({ message: 'Date must be a string in YYYY-MM-DD format' })
  date: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsOptional()
  @IsString({ message: 'Action taken must be a string' })
  action_taken?: string;

  @IsOptional()
  @IsString({ message: 'Assigned must be a string' })
  assigned?: string;

  @IsOptional()
  @IsString({ message: 'Note must be a string' })
  note?: string;

  @IsOptional()
  @IsString({ message: 'Upload documents must be a string' })
  upload_documents?: string;
}

