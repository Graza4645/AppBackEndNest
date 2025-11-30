import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontOfficePurposeDto } from './create-front-office-purpose.dto';

export class UpdateFrontOfficePurposeDto extends PartialType(CreateFrontOfficePurposeDto) {}
