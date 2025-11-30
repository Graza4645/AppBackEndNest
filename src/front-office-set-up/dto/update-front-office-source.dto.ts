import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontOfficeSourceDto } from './create-front-office-source.dto';

export class UpdateFrontOfficeSourceDto extends PartialType(CreateFrontOfficeSourceDto) {}
