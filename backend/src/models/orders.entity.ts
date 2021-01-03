import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, OneToMany, ManyToOne } from 'typeorm';
import { ProductsOrder } from './productsOrder.entity';
import { Client } from './clients.entity';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, client => client.orders)
  client: Client;

  @Column({ type: 'float', default: 0 })
  totalProducts: number;

  @Column({ type: 'float', default: 0 })
  totalPrice: number;

  @Column({ type: 'varchar', length: '300' })
  description: string;

  @OneToMany(() => ProductsOrder, productsOrder => productsOrder.order)
  products: ProductsOrder[];
  
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateDateTime: Date;
}