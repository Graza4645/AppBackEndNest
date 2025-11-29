import { IsString, IsOptional, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateRoomTypeDto {
  @IsString({ message: 'Room Type must be a string.' })
  @IsNotEmpty({ message: 'Room Type is required.' })
  @MaxLength(100, { message: 'Room Type cannot exceed 100 characters.' })
  room_type: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string.' })
  @MaxLength(255, { message: 'Description cannot exceed 255 characters.' })
  description?: string;
}
