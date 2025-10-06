import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './interfaces/create-category.dto';
import { UpdateCategoryDto } from './interfaces/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get('all')
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id/one')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Post('by-ids')
  async getCategoriesWithProducts(@Body() body: { categories: number[] }) {
    return this.categoryService.getCategoriesWithProducts(body.categories);
  }

  @Patch(':id/update')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
