import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFrontOfficeSourceDto {
  @IsString({ message: 'Source must be a string' })
  @IsNotEmpty({ message: 'Source is required' })
  source: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;
}
