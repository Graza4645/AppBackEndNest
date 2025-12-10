


import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateLoginAuthDto {
  @IsString({ message: 'Username must be a valid string' })
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @IsString({ message: 'Password must be a valid string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(4, { message: 'Password must be at least 4 characters long' })
  password: string;
}
