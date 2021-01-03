import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { Order } from './orders.entity'

@Entity({ name: 'productsOrder' })
export class ProductsOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ type: 'varchar', length: '300' })
  name: string;

  @Column({ type: 'int', default: 0 })
  count: number;

  @Column({ type: 'float', default: 0 })
  price: number;

  @Column({ type: 'float', default: 0 })
  totalPrice: number;

  @ManyToOne(() => Order, order => order.products)
  order: Order;
  
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateDateTime: Date;
}