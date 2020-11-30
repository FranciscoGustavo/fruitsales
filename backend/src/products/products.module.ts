import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductsService } from './services/products.service';
import { Product } from '../models/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsResolver, ProductsService]
})
export class ProductsModule {}
