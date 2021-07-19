import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Complex } from '../complexes/complex.entity';
import { PlanningImage } from './planning_image.entity';

@Entity()
export class Planning {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'float' })
  square: number;

  @ManyToOne(() => Complex)
  complex: Complex;

  @OneToMany(() => PlanningImage, (i) => i.planning)
  images: PlanningImage[];
}
