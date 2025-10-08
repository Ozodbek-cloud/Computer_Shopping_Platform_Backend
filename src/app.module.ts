import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { NestedCategoryModule } from './modules/nested_category/nested_category.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ContactModule } from './modules/contact/contact.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { MycartModule } from './modules/mycart/mycart.module';

@Module({

  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(process.cwd(), 'uploads',),
        serveRoot: '/',
      },
    ),

    AuthModule, CategoryModule, NestedCategoryModule, ProductsModule, OrdersModule, ContactModule, UsersModule, MycartModule],

})
export class AppModule { }
