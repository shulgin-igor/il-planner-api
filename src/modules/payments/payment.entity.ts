import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Complex } from '../complexes/complex.entity';
import { Apartment } from '../apartments/apartment.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @OneToOne(() => Complex, (c) => c.payments)
  complex: Complex;

  @OneToOne(() => Apartment)
  @JoinColumn()
  apartment: Apartment;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
