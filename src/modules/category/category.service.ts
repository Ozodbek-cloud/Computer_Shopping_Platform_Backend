import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './interfaces/create-category.dto';
import { UpdateCategoryDto } from './interfaces/update-category.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) { }

  async create(createCategory: CreateCategoryDto) {
    let data = await this.prismaService.category.create(
      {
        data: createCategory
      }
    )
    if (!data) throw new InternalServerErrorException('Bye Server')

    return {
      data: data,
      message: "Successfullly Created Category",
    }
  }

  async findAll() {
    let data = await this.prismaService.category.findMany({include: {nestedCategories: true}})
    return {
      data: data,
      message: "Successfully Getted All Categories"
    }
  }

  async findOne(id: number) {
    let find_one = await this.prismaService.category.findFirst({
      where: {
        id: id
      },
    })
    if (!find_one) throw new NotFoundException('Id Not Found')

    return {
      data: find_one,
      message: "Successfully Getted One Category"
    }

  }

  async update(id: number, updateCategory: UpdateCategoryDto) {
    let find_one_and_Update = await this.prismaService.category.update({
      where: {
        id: id
      },
      data: updateCategory

    })
    if (!find_one_and_Update) throw new NotFoundException('Id Not Found')

    return {
      data: find_one_and_Update,
      message: "Successfully Updated One Category"
    }
  }

  async remove(id: number) {
    let deleted_one = await this.prismaService.category.delete({
      where: {
        id: id
      },
    })
    if (!deleted_one) throw new NotFoundException('Id Not Found')

    return {
      data: deleted_one,
      message: "Successfully Deleted One Category"
    }
  }
}
