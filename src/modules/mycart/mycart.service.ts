import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMycartDto } from './interfaces/create-mycart.dto';
import { UpdateMycartDto } from './interfaces/update-mycart.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class MycartService {
  constructor(private prismaService: PrismaService) { }
  async create(createMycart: CreateMycartDto) {
    let data = await this.prismaService.myCart.create({
      data: createMycart
    })
    return {
      message: "Successfully Added to Cart",
      data: data
    }
  }

  async findAll() {
    let data = await this.prismaService.myCart.findMany({ include: { products: true } })
    return {
      message: "Successfully SUUUUUUUUUUUUUUUUUUUU",
      data: data
    }
  }

  async remove(id: number) {
    let delete_one = await this.prismaService.myCart.delete({
      where: {
        id: id
      }
    })
    if (!delete_one) {
      throw new NotFoundException('Id not Found')
    }
    return {
         message: "Successsfully Removed From Cart",
         data:delete_one
    }
  }
}
