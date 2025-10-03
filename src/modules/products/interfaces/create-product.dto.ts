import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 15 Pro Max' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Eng so‘nggi model smartfon' })
  @IsString()
  about: string;

  @ApiProperty({ example: { main: 'Black', available: ['Black', 'Silver', 'Gold'] }, type: Object })
  @IsObject()
  @Type(() => Object)
  color: Record<string, any>;

  @ApiProperty({ example: 'https://example.com/images/iphone15.jpg' })
  @IsString()
  img: string;

  @ApiProperty({ example: { weight: '200g', material: 'Aluminium' }, type: Object })
  @IsObject()
  @Type(() => Object)
  details: Record<string, any>;

  @ApiProperty({ example: { cpu: 'A17 Bionic', ram: '8GB', storage: '256GB' }, type: Object })
  @IsObject()
  @Type(() => Object)
  spec: Record<string, any>;

  @ApiProperty({ example: 1499.99 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 1299.99 })
  @IsNumber()
  discount_price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
