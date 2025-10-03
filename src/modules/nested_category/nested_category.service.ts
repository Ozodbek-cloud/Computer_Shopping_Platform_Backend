import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNestedCategoryDto } from './interfaces/create-nested_category.dto';
import { UpdateNestedCategoryDto } from './interfaces/update-nested_category.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class NestedCategoryService {
  constructor(private prismaService: PrismaService) { }

  async create(createNestedCategory: CreateNestedCategoryDto) {
    let data = await this.prismaService.nestedCategory.create({
      data: createNestedCategory
    })
    return {
      data: data,
      message: "Successfully Created Nested Category"
    }
  }

  async findAll() {
    const data = await this.prismaService.nestedCategory.findMany({
      include: { category: { select: { name: true } } },
    });
    return { data, message: 'All Nested Categories fetched successfully' };
  }

  async findOne(id: number) {
    const data = await this.prismaService.nestedCategory.findUnique({
      where: { id },
      include: { category: { select: { name: true } } },
    });
    if (!data) throw new NotFoundException(`NestedCategory with ID ${id} not found`);
    return { data, message: `Nested Category with ID ${id} fetched successfully` };
  }

  async update(id: number, updateNestedCategoryDto: UpdateNestedCategoryDto) {
    const exists = await this.prismaService.nestedCategory.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`NestedCategory with ID ${id} not found`);
    const data = await this.prismaService.nestedCategory.update({
      where: { id },
      data: updateNestedCategoryDto,
    });
    return { data, message: `Nested Category with ID ${id} updated successfully` };
  }

  async remove(id: number) {
    const exists = await this.prismaService.nestedCategory.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`NestedCategory with ID ${id} not found`);
    const data = await this.prismaService.nestedCategory.delete({ where: { id } });
    return { data, message: `Nested Category with ID ${id} deleted successfully` };
  }
}
