import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Planning } from './planning.entity';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floor: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Planning)
  @JoinColumn()
  planning: Planning;
}
