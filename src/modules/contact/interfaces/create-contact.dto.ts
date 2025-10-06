import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: 'John Doe', description: 'To‘liq ism' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'johndoe@gmail.com', description: 'Email manzil' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+998901234567', description: 'Telefon raqami' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'Salom, sizning xizmatlaringiz haqida ma’lumot kerak edi.', description: 'Foydalanuvchi xabari' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
