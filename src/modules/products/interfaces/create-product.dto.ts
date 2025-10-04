import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsObject } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 15 Pro Max' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Eng so‘nggi model smartfon' })
  @IsString()
  about: string;

  @ApiProperty({ example: { main: 'Black', available: ['Black', 'Silver', 'Gold'] }, type: Object })
  @IsObject()
  @Transform(({ value }) => (typeof value === 'string' ? JSON.parse(value) : value))
  color: Record<string, any>;

  @ApiProperty({ example: 'https://example.com/images/iphone15.jpg', format: "binary" })
  img: string;

  @ApiProperty({ description: "Id Of Nested Category", example: 1})
  @IsNumber()
  @Type(() => Number)
  nestedcategoryId : number

  @ApiProperty({ example: { weight: '200g', material: 'Aluminium' }, type: Object })
  @IsObject()
  @Transform(({ value }) => (typeof value === 'string' ? JSON.parse(value) : value))
  details: Record<string, any>;

  @ApiProperty({ example: { cpu: 'A17 Bionic', ram: '8GB', storage: '256GB' }, type: Object })
  @IsObject()
  @Transform(({ value }) => (typeof value === 'string' ? JSON.parse(value) : value))
  spec: Record<string, any>;

  @ApiProperty({ example: 1499.99 })
  @IsNumber()
  @Type(() => Number)
  price: number;

  @ApiProperty({ example: 1299.99 })
  @IsNumber()
  @Type(() => Number)
  discount_price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) { }
