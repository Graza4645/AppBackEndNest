
import { IsNotEmpty, IsString, IsMobilePhone } from 'class-validator';

export class CreateStaffListDto {
  @IsNotEmpty({ message: 'Staff name is required' })
  @IsString()
  staff_name: string;

  @IsNotEmpty({ message: 'Mobile number is required' })
  @IsMobilePhone('en-IN', {}, { message: 'Invalid mobile number format' })
  mobile_number: string;
}
