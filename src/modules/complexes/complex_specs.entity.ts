import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spec } from './spec.entity';
import { Complex } from './complex.entity';

@Entity()
export class ComplexSpec {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Complex)
  @JoinColumn()
  complex: Complex;

  @OneToOne(() => Spec)
  @JoinColumn()
  spec: Spec;

  @Column()
  value: string;
}
