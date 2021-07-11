import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Complex } from '../complexes/complex.entity';

@Entity()
export class Planning {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  square: number;

  @OneToOne(() => Complex)
  @JoinColumn()
  complex: Complex;
}
