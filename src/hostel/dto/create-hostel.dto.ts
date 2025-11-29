import { 
  IsString, 
  IsNotEmpty, 
  MaxLength, 
  IsOptional, 
  IsNumber 
} from 'class-validator';

export class CreateHostelDto {
  @IsString({ message: 'Hostel Name must be a string.' })
  @IsNotEmpty({ message: 'Hostel Name is required.' })
  @MaxLength(150, { message: 'Hostel Name cannot exceed 150 characters.' })
  hostel_name: string;

  @IsNotEmpty({ message: 'Room Type is required.' })
  @IsNumber({}, { message: 'Room Type must be a number (Room Type ID).' })
  room_type_id: number;

  @IsOptional()
  @IsString({ message: 'Address must be a string.' })
  @MaxLength(255, { message: 'Address cannot exceed 255 characters.' })
  address?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Intake must be a valid number.' })
  intake?: number;

  @IsOptional()
  @IsString({ message: 'Description must be a string.' })
  @MaxLength(255, { message: 'Description cannot exceed 255 characters.' })
  description?: string;
}

