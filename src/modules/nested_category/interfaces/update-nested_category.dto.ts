import { PartialType } from '@nestjs/swagger';
import { CreateNestedCategoryDto } from './create-nested_category.dto';

export class UpdateNestedCategoryDto extends PartialType(CreateNestedCategoryDto) {}
