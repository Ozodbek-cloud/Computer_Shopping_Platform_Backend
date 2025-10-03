import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({description: "Name Of Category", example:"MSI"})
    @IsString()
    @IsNotEmpty()
    name : string
}
