import { PartialType } from '@nestjs/mapped-types';
import { CreatePostalDispatchDto } from './create-postal-dispatch.dto';

export class UpdatePostalDispatchDto extends PartialType(CreatePostalDispatchDto) {}
