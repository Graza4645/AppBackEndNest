import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFrontOfficeReferenceDto {
  @IsString({ message: 'Reference must be a string' })
  @IsNotEmpty({ message: 'Reference is required' })
  reference: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;
}
