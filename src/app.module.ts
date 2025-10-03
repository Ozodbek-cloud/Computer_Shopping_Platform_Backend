import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { NestedCategoryModule } from './modules/nested_category/nested_category.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ContactModule } from './modules/contact/contact.module';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [AuthModule, CategoryModule, NestedCategoryModule, ProductsModule, OrdersModule, ContactModule, PaymentModule],

})
export class AppModule {}
