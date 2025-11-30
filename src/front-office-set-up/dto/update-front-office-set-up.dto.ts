import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontOfficeSetUpDto } from './create-front-office-set-up.dto';

export class UpdateFrontOfficeSetUpDto extends PartialType(CreateFrontOfficeSetUpDto) {}
