import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailPdfDto } from './create-email.dto';

export class UpdateEmailDto extends PartialType(CreateEmailPdfDto) {}
