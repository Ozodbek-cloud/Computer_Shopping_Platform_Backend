import { Injectable } from '@nestjs/common';
import { CreateNestedCategoryDto } from './interfaces/create-nested_category.dto';
import { UpdateNestedCategoryDto } from './interfaces/update-nested_category.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class NestedCategoryService {
  constructor(private prismaService : PrismaService) {}

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
    return `This action returns all nestedCategory`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} nestedCategory`;
  }

  async update(id: number, updateNestedCategoryDto: UpdateNestedCategoryDto) {
    return `This action updates a #${id} nestedCategory`;
  }

  async remove(id: number) {
    return `This action removes a #${id} nestedCategory`;
  }
}
