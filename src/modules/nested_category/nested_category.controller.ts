import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NestedCategoryService } from './nested_category.service';
import { CreateNestedCategoryDto } from './interfaces/create-nested_category.dto';
import { UpdateNestedCategoryDto } from './interfaces/update-nested_category.dto';

@Controller('nested-category')
export class NestedCategoryController {
  constructor(private readonly nestedCategoryService: NestedCategoryService) {}

  @Post()
  create(@Body() createNestedCategoryDto: CreateNestedCategoryDto) {
    return this.nestedCategoryService.create(createNestedCategoryDto);
  }

  @Get()
  findAll() {
    return this.nestedCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nestedCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNestedCategoryDto: UpdateNestedCategoryDto) {
    return this.nestedCategoryService.update(+id, updateNestedCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nestedCategoryService.remove(+id);
  }
}
