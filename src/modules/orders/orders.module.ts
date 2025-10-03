import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [OrdersController],
  providers: [OrderService, PrismaService],
})
export class OrdersModule {}
