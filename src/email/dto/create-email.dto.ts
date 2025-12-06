import { IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateEmailDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsString({ message: 'Attachment path must be a string' })
  @IsOptional()
  attachmentPath?: string;

  @IsString({ message: 'CC must be a string' })
  @IsOptional()
  cc?: string;

  @IsString({ message: 'BCC must be a string' })
  @IsOptional()
  bcc?: string;
}
