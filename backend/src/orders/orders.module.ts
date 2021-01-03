import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersResolver } from './resolvers/orders.resolver';
import { OrdersService } from './services/orders.service';
import { Order } from '../models/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrdersResolver, OrdersService]
})
export class OrdersModule {}
