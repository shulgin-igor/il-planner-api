import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Payment } from '../payments/payment.entity';

@Entity()
export class Complex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  address: string;

  @ManyToOne(() => Payment)
  payments: Payment[];
}
