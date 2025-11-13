

import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateCallLogDto {
  @IsNotEmpty({ message: 'Name is required and cannot be empty' })
  @IsString({ message: 'Name must be a valid string' })
  name: string;

  @IsNotEmpty({ message: 'Phone number is required and cannot be empty' })
  @IsString({ message: 'Phone number must be a valid string' })
  number: string;

  @IsNotEmpty({ message: 'Date is required and cannot be empty' })
  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, { message: 'Date must be in DD-MMM-yyyy format (e.g., 22-May-2025)' })
  date: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string value' })
  description?: string;

  @IsOptional()
  @Matches(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/, { message: 'Next follow-up date must be in DD-MMM-yyyy format (e.g., 22-May-2025)' })
  nextFollowUpDate?: string;

  @IsOptional()
  @IsString({ message: 'Duration must be a string value (e.g., "10 min")' })
  duration?: string;

  @IsOptional()
  @IsString({ message: 'Note must be a string value' })
  note?: string;

  @IsOptional()
  @IsString({ message: 'Call type must be a string value (e.g., "Incoming" or "Outgoing")' })
  callType?: string;
}
