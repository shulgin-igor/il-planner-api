import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ComplexSpec } from './complex_specs.entity';
import { Gallery } from '../gallery/gallery.entity';
import { Developer } from '../developers/developer.entity';
import { Stage } from './stage.entity';

@Entity()
export class Complex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  logo: string;

  @OneToMany(() => ComplexSpec, (s) => s.complex)
  specs: ComplexSpec[];

  @OneToMany(() => Gallery, (g) => g.complex)
  gallery: Gallery[];

  @OneToMany(() => Stage, (g) => g.complex)
  stages: Gallery[];

  @ManyToMany(() => Developer)
  @JoinTable()
  developers: Developer[];
}
