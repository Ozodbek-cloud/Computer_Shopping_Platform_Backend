import { PartialType } from '@nestjs/swagger';
import { CreateMycartDto } from './create-mycart.dto';

export class UpdateMycartDto extends PartialType(CreateMycartDto) {}
