import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Planning } from './planning.entity';
import { Payment } from '../payments/payment.entity';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floor: number;

  @Column()
  number: number;

  @ManyToOne(() => User)
  user: User;

  @OneToOne(() => Planning)
  @JoinColumn()
  planning: Planning;

  @OneToMany(() => Payment, (p) => p.apartment)
  payments: Payment[];
}
