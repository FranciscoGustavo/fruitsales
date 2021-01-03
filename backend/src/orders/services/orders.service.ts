import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {

  async getAll() {
    return Promise.resolve([
      {
        id: '123',
        client: 'LA RANITA SA DE CV',
        totalProducts: 10,
        totalPrice: 10256.5,
        description: 'PERSONAL'
      },
      {
        id: '123',
        client: 'LA RANITA SA DE CV',
        totalProducts: 10,
        totalPrice: 10256.5,
        description: 'COCINA'
      },
    ]);
  }

  async getOne(id: string) {
    return Promise.resolve({
      id,
      client: 'LA RANITA SA DE CV',
      totalProducts: 10,
      totalPrice: 10256.5,
      description: 'PERSONAL',
      products: [
        { name: 'PAPA BlANCA GRANDE', count: 10, price: 26.05, totalPrice: 2605 },
        { name: 'PAPA BlANCA GRANDE', count: 10, price: 26.05, totalPrice: 2605 },
        { name: 'PAPA BlANCA GRANDE', count: 10, price: 26.05, totalPrice: 2605 }
      ]
    });
  }
}
