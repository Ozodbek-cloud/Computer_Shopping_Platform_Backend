import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './interfaces/create-user.dto';
import { UpdateUserDto } from './interfaces/update-user.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }
  async findAll() {
    let data = await this.prismaService.user.findMany()
    return {
      message: "Successfully Getted Users",
      data: data
    }
  }

  async findOne(id: number) {
    let data = await this.prismaService.user.findFirst({
      where: {
        id: id
      }
    })
    return {
      message: "Successfully Getted One User",
      data: data
    }
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
