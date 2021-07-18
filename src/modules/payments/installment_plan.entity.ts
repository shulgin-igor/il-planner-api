import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Apartment } from '../apartments/apartment.entity';

@Entity()
export class InstallmentPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column()
  duration: number;

  @Column({ type: 'float' })
  meters: Date;

  @OneToOne(() => Apartment)
  @JoinColumn()
  apartment: Apartment;
}
