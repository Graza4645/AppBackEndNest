


import { IsNotEmpty, IsOptional, IsString, IsNumber, Matches } from 'class-validator';

export class CreateVisitorstaffDto {
  
   @IsNotEmpty({ message: 'Purpose is required' })
  @IsString({ message: 'Purpose must be a string' })
  purpose: string;

  @IsNotEmpty({ message: 'Meeting With is required' })
  @IsString({ message: 'Meeting With must be a string' })
  meeting_with: string;

  @IsNotEmpty({ message: 'Staff name is required' })
  @IsString({ message: 'Staff name must be a string' })
  staff: string;

  @IsNotEmpty({ message: 'Visitor Name is required' })
  @IsString({ message: 'Visitor Name must be a string' })
  visitor_name: string;

  @IsOptional()
  @IsString({ message: 'ID Card must be a string' })
  id_card: string;

  @IsNotEmpty({ message: 'Phone Number is required' })
  @IsString({ message: 'Phone Number must be a string' })
  phone_number: string;

  @IsNotEmpty({ message: 'Date is required' })
  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, { message: 'Date must be in DD-MMM-yyyy format (e.g., 02-May-2025)' })
  date: string;

  @IsOptional()
  @IsNumber({}, { message: 'Number of persons must be a number' })
  number_of_person: number;

  @IsOptional()
  @IsString({ message: 'In Time must be a string' })
  in_time: string;

  @IsOptional()
  @IsString({ message: 'Out Time must be a string' })
  out_time: string;

  @IsOptional()
  @IsString({ message: 'Comments must be a string' })
  comments: string;

  @IsOptional()
  @IsString({ message: 'Upload Documents must be a string' })
  upload_documents: string;

}
