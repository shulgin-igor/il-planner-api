import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spec } from './spec.entity';
import { Complex } from './complex.entity';

@Entity()
export class ComplexSpec {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Complex)
  complex: Complex;

  @ManyToOne(() => Spec)
  spec: Spec;

  @Column()
  value: string;
}
