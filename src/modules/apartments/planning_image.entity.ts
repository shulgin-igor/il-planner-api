import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Planning } from './planning.entity';

@Entity()
export class PlanningImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @OneToOne(() => Planning)
  @JoinColumn()
  planning: number;
}
