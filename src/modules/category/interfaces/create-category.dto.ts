import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({ description: "Name Of Category", example: "MSI" })
    @IsString()
    @IsNotEmpty()
    name: string
}

import { IsArray, IsNumber, ArrayNotEmpty } from 'class-validator';

export class FilterByCategoryDto {
    @ApiProperty({ example: [1, 2, 3], description: 'Kategoriya ID-lari' })
    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    categories: number[];
}
