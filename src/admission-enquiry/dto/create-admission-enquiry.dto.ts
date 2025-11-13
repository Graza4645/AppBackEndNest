import {IsString, IsNotEmpty, IsEmail,
  IsOptional,
  IsDateString,
  IsInt,
  Length,
  Matches,
} from 'class-validator';

export class CreateAdmissionEnquiryDto {
  @IsString({ message: 'Only string values are accepted for name' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @Length(2, 100, { message: 'Name must be between 2 and 100 characters' })
  name: string;

  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  @Matches(/^[0-9]{10}$/, {
    message: 'Phone number must be 10 digits',
  })
  phone: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsOptional()
  email: string;

  @IsString({ message: 'Address must be a string' })
  @IsOptional()
  address: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  description: string;

  @IsString({ message: 'Note must be a string' })
  @IsOptional()
  note: string;

  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, {
    message: 'Date must be in DD-MMM-YYYY format (e.g., 05-Nov-2025)'
  })
  @IsNotEmpty({ message: 'Date cannot be empty' })
  date: string;

  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, {
    message: 'Next follow-up date must be in DD-MMM-YYYY format (e.g., 05-Nov-2025)'
  })
  @IsOptional()
  next_follow_up_date: string;

  @IsString({ message: 'Assigned must be a string' })
  @IsOptional()
  assigned: string;

  @IsString({ message: 'Reference must be a string' })
  @IsOptional()
  reference: string;

  @IsString({ message: 'Source must be a string' })
  @IsOptional()
  source: string;

  @IsString({ message: 'Class must be a string' })
  @IsOptional()
  class: string;

  @IsInt({ message: 'Number of child must be an integer' })
  @IsOptional()
  number_of_child: number;
}
