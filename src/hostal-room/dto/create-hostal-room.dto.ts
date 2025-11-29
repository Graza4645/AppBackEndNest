import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateHostalRoomDto {

  @IsString({ message: 'Room Number / Name must be a string.' })
  @IsNotEmpty({ message: 'Room Number / Name is required.' })
  @MaxLength(150, { message: 'Room Number / Name cannot exceed 150 characters.' })
  room_name: string;

  @IsNotEmpty({ message: 'Hostel is required.' })
  @IsNumber({}, { message: 'Hostel must be a valid ID (number).' })
  hostel_id: number;

  @IsNotEmpty({ message: 'Room Type is required.' })
  @IsNumber({}, { message: 'Room Type must be a valid ID (number).' })
  room_type_id: number;

  @IsNotEmpty({ message: 'Number of Beds is required.' })
  @IsNumber({}, { message: 'Number of Beds must be a number.' })
  number_of_beds: number;

  @IsNotEmpty({ message: 'Cost Per Bed is required.' })
  @IsNumber({}, { message: 'Cost Per Bed must be a number.' })
  cost_per_bed: number;

  @IsOptional()
  @IsString({ message: 'Description must be a string.' })
  @MaxLength(255, { message: 'Description cannot exceed 255 characters.' })
  description?: string;
}

