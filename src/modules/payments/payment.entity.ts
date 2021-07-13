import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Apartment } from '../apartments/apartment.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  metersAmount: number;

  @Column()
  date: Date;

  @OneToOne(() => Apartment)
  @JoinColumn()
  apartment: Apartment;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
