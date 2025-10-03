import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ description: 'Buyurtma qilingan mahsulot soni', example: 2 })
  count: number;

  @ApiProperty({ description: 'Umumiy narx (soni * mahsulot narxi)', example: 199.99 })
  subTotal: number;

  @ApiProperty({ description: 'Mahsulot IDsi', example: 'prd_abc123' })
  productId: string;

  @ApiProperty({ description: 'Foydalanuvchi IDsi', example: 1 })
  userId: number;
}

export class UpdateOrderDto {
  @ApiProperty({ description: 'Buyurtma qilingan mahsulot soni', example: 3, required: false })
  count?: number;

  @ApiProperty({ description: 'Umumiy narx (soni * mahsulot narxi)', example: 299.99, required: false })
  subTotal?: number;

  @ApiProperty({ description: 'Mahsulot IDsi', example: 'prd_xyz789', required: false })
  productId?: string;

  @ApiProperty({ description: 'Foydalanuvchi IDsi', example: 2, required: false })
  userId?: number;
}
