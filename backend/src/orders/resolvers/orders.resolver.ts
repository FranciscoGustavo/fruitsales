import { Resolver, Query, Args } from '@nestjs/graphql';
import { OrdersService } from '../services/orders.service';
@Resolver()
export class OrdersResolver {
  constructor(
    private ordersService: OrdersService
  ) {}

  @Query('orders')
  async getAll() {
    try {
      const orders = await this.ordersService.getAll();
      return orders
    } catch(err) {

    }
  }

  @Query('order')
  async getOne(@Args('id') id) {
    try {
      const order = await this.ordersService.getOne(id);
      return order
    } catch(err) {

    }
  }
}
