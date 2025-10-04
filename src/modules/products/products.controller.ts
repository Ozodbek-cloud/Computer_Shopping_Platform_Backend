import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UnsupportedMediaTypeException, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './interfaces/create-product.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('img', {
    storage: diskStorage({
      destination: "./uploads/img",
      filename: (req, file, cb) => {
        let posterName = file.originalname
        cb(null, posterName)
      }
    }),

    fileFilter: (req, file, callback) => {
      let allowed: string[] = ['image/jpeg', 'image/jpg', 'image/png']
      if (!allowed.includes(file.mimetype)) {
        callback(new UnsupportedMediaTypeException("File tpe must be .jpg | .jpeg | .png "), false)

      }
      callback(null, true)
    }
  }))
  create(@Body() createProductDto: CreateProductDto, @UploadedFile() image: Express.Multer.File) {
    return this.productsService.create(createProductDto, image);
  }

  @Get('all')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id/one')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id/update')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
