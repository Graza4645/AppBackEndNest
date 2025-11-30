import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontOfficeComplainTypeDto } from './create-front-office-complain-type.dto';

export class UpdateFrontOfficeComplainTypeDto extends PartialType(CreateFrontOfficeComplainTypeDto) {}
