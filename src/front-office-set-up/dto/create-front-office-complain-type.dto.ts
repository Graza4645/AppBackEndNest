import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFrontOfficeComplainTypeDto {
  @IsString({ message: 'Complain must be a string' })
  @IsNotEmpty({ message: 'Complain is required' })
  complain: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;
}
