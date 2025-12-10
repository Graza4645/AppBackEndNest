import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginAuthDto } from './create-login-auth.dto';

export class UpdateLoginAuthDto extends PartialType(CreateLoginAuthDto) {}
