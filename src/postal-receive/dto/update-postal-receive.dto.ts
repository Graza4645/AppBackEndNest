import { PartialType } from '@nestjs/mapped-types';
import { CreatePostalReceiveDto } from './create-postal-receive.dto';

export class UpdatePostalReceiveDto extends PartialType(CreatePostalReceiveDto) {}
