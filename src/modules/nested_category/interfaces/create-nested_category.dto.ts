import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNestedCategoryDto {
    @ApiProperty({ description: "Name Of Nested Category", example: "MSI Tridens" })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ description: "Id Of Category", example: 1 })
    @IsNumber()
    @IsNotEmpty()
    categoryId: number
}
