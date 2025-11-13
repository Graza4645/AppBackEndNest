import { IsOptional, IsString, Matches } from 'class-validator';

export class CreatePostalReceiveDto {
  @IsOptional()
  @IsString({ message: 'From title must be a string' })
  from_title?: string;

  @IsOptional()
  @IsString({ message: 'Reference number must be a string' })
  reference_no?: string;

  @IsOptional()
  @IsString({ message: 'Address must be a string' })
  address?: string;

  @IsOptional()
  @IsString({ message: 'Note must be a string' })
  note?: string;

  @IsOptional()
  @IsString({ message: 'To title must be a string' })
  to_title?: string;

  @IsOptional()
  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, { message: 'Date must be in DD-MMM-yyyy format (e.g., 12-Nov-2025)' })
  date?: string;

  @IsOptional()
  @IsString({ message: 'Upload documents must be a string' })
  upload_documents?: string;
}
