import { Module } from '@nestjs/common';
import { NestedCategoryService } from './nested_category.service';
import { NestedCategoryController } from './nested_category.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [NestedCategoryController],
  providers: [NestedCategoryService, PrismaService],
})
export class NestedCategoryModule {}
