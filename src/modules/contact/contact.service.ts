import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './interfaces/create-contact.dto';
import { UpdateContactDto } from './interfaces/update-contact.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prismaService: PrismaService) { }
  async create(createContact: CreateContactDto) {
    let data = await this.prismaService.contact.create({
      data: createContact
    })
    return {
      message: "Successfully Created YEAAEAEAEAEEE EE Bambir",
      data:data
    }
  }

  findAll() {
    return `This action returns all contact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
