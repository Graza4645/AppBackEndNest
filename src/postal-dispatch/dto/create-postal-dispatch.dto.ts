import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreatePostalDispatchDto {
  @IsNotEmpty({ message: 'To title is required' })
  @IsString({ message: 'To title must be a string' })
  to_title: string;

  @IsNotEmpty({ message: 'Reference number is required' })
  @IsString({ message: 'Reference number must be a string' })
  reference_no: string;

  @IsNotEmpty({ message: 'Address is required' })
  @IsString({ message: 'Address must be a string' })
  address: string;

  @IsOptional()
  @IsString({ message: 'Note must be a string' })
  note?: string;

  @IsNotEmpty({ message: 'From title is required' })
  @IsString({ message: 'From title must be a string' })
  from_title: string;

  @IsNotEmpty({ message: 'Date is required' })
  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, { message: 'Date must be in DD-MMM-yyyy format (e.g., 12-Nov-2025)' })
  date: string;

  @IsOptional()
  @IsString({ message: 'Upload document path must be a string' })
  upload_documents?: string;
}
