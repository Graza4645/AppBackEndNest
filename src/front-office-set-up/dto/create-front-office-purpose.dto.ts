import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFrontOfficePurposeDto {
  @IsString({ message: 'Purpose must be a string' })
  @IsNotEmpty({ message: 'Purpose is required' })
  purpose: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;
}
