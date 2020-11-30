import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity } from 'typeorm';

export enum Unities {
  pz = "pz",
  kg = "kg",
}
@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  cover: string;

  @Column({ type: 'varchar', length: '300' })
  name: string;

  @Column({ type: 'enum', enum: Unities, default: Unities.kg })
  unity: Unities;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateDateTime: Date;
}