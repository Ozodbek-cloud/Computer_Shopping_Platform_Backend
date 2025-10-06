import { Module } from '@nestjs/common';
import { MycartService } from './mycart.service';
import { MycartController } from './mycart.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [MycartController],
  providers: [MycartService, PrismaService],
})
export class MycartModule {}
