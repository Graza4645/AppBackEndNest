import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontOfficeReferenceDto } from './create-front-office-reference.dto';

export class UpdateFrontOfficeReferenceDto extends PartialType(CreateFrontOfficeReferenceDto) {}
