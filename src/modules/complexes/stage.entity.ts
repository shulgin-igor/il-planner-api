import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ComplexSpec } from './complex_specs.entity';
import { Complex } from './complex.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column()
  quarter: number;

  @ManyToOne(() => Complex)
  complex: Complex;
}
