import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './interfaces/create-product.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const data = await this.prisma.product.create({
      data: createProductDto,
    });
    return { data, message: 'Product created successfully' };
  }

  async findAll() {
    const data = await this.prisma.product.findMany({
      include: { orders: true },
    });
    return { data, message: 'All products fetched successfully' };
  }

  async findOne(id: string) {
    const data = await this.prisma.product.findUnique({
      where: { id },
      include: { orders: true },
    });
    if (!data) throw new NotFoundException(`Product with ID ${id} not found`);
    return { data, message: `Product with ID ${id} fetched successfully` };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const exists = await this.prisma.product.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`Product with ID ${id} not found`);
    const data = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    return { data, message: `Product with ID ${id} updated successfully` };
  }

  async remove(id: string) {
    const exists = await this.prisma.product.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`Product with ID ${id} not found`);
    const data = await this.prisma.product.delete({ where: { id } });
    return { data, message: `Product with ID ${id} deleted successfully` };
  }
}
