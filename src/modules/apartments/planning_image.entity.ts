import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Planning } from './planning.entity';

@Entity()
export class PlanningImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Planning)
  planning: number;
}
