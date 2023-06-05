import { PartialType } from '@nestjs/mapped-types';
import { CreateAritstDto } from './create-aritst.dto';

export class UpdateAritstDto extends PartialType(CreateAritstDto) {}
