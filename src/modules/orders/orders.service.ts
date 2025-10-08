import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateOrderDto, UpdateOrderDto } from './interfaces/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateOrderDto[]) {
    return this.prisma.order.createMany({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.order.findMany({ include: { product: true, user: true, } });
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id }, include: { product: true, user: true, } });
  }

  async update(id: number, dto: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
