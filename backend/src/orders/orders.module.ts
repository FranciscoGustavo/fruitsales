import { Module } from '@nestjs/common';
import { OrdersResolver } from './resolvers/orders.resolver';
import { OrdersService } from './services/orders.service';

@Module({
  providers: [OrdersResolver, OrdersService]
})
export class OrdersModule {}
