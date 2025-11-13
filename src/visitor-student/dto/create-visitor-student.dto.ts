


import { 
  IsNotEmpty, 
  IsOptional, 
  IsString, 
  IsInt, 
  IsPhoneNumber,
  Matches 
} from 'class-validator';

export class CreateVisitorStudentDto {
  @IsNotEmpty({ message: 'Purpose is required.' })
  @IsString({ message: 'Purpose must be a valid string.' })
  purpose: string;

  @IsNotEmpty({ message: 'Meeting With field is required.' })
  @IsString({ message: 'Meeting With must be a valid string.' })
  meeting_with: string;

  @IsNotEmpty({ message: 'Class name is required.' })
  class: any;

  @IsNotEmpty({ message: 'Section is required.' })
  @IsString({ message: 'Section must be a valid string.' })
  section: string;

  @IsNotEmpty({ message: 'ID card number is required.' })
  @IsString({ message: 'ID card must be a valid string.' })
  id_card: string;

  @IsNotEmpty({ message: 'Student name is required.' })
  @IsString({ message: 'Student name must be a valid string.' })
  student: string;

  @IsNotEmpty({ message: 'Date is required.' })
  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, { message: 'Date must be in DD-MMM-yyyy format (e.g., 12-May-2025)' })
  date: string;

  @IsNotEmpty({ message: 'Visitor name is required.' })
  @IsString({ message: 'Visitor name must be a valid string.' })
  visitor_name: string;

  @IsNotEmpty({ message: 'In Time is required.' })
  @IsString({ message: 'In Time must be a valid string (e.g., HH:mm).' })
  in_time: string;

  @IsNotEmpty({ message: 'Out Time is required.' })
  @IsString({ message: 'Out Time must be a valid string (e.g., HH:mm).' })
  out_time: string;

  @IsNotEmpty({ message: 'Phone number is required.' })
  @IsPhoneNumber('IN', { message: 'Phone number must be a valid Indian number.' })
  phone_number: string;

  @IsOptional()
  @IsString({ message: 'Comments must be a valid string.' })
  comments?: string;

  @IsNotEmpty({ message: 'Number of persons is required.' })
  @IsInt({ message: 'Number of persons must be an integer value.' })
  number_of_person: number;

  @IsOptional()
  @IsString({ message: 'Upload documents must be a valid string (file path or URL).' })
  upload_documents?: string;
}

