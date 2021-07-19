import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Planning } from './planning.entity';
import { Payment } from '../payments/payment.entity';
import { Stage } from '../complexes/stage.entity';

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

  @ManyToOne(() => Planning)
  planning: Planning;

  @ManyToOne(() => Stage)
  stage: Stage;

  @OneToMany(() => Payment, (p) => p.apartment)
  payments: Payment[];
}
