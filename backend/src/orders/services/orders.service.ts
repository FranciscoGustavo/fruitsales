import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../models/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
  ) {}

  async getAll() {
    const orders = await this.ordersRepo.find({ relations: ['client', 'products'] });
    return orders.map((order) => ({ ...order, client: order.client.username }));
  }

  async getOne(id: string) {
    const order = await this.ordersRepo.findOne(id, { relations: ['client', 'products'] });
    return { ...order, client: order.client.username };
  }
}
