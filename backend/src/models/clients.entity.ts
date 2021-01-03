import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, OneToMany } from 'typeorm';
import { Order } from './orders.entity';
@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: '300', unique: true })
  username: string;

  @OneToMany(() => Order, order => order.client)
  orders: Order[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateDateTime: Date;
}