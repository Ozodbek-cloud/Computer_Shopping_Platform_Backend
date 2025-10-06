import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MycartService } from './mycart.service';
import { CreateMycartDto } from './interfaces/create-mycart.dto';
import { UpdateMycartDto } from './interfaces/update-mycart.dto';

@Controller('mycart')
export class MycartController {
  constructor(private readonly mycartService: MycartService) {}

  @Post()
  create(@Body() createMycartDto: CreateMycartDto) {
    return this.mycartService.create(createMycartDto);
  }

  @Get()
  findAll() {
    return this.mycartService.findAll();
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mycartService.remove(+id);
  }
}
