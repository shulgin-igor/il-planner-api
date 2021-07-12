import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ComplexSpec } from './complex_specs.entity';
import { Gallery } from '../gallery/gallery.entity';

@Entity()
export class Complex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  address: string;

  @OneToMany(() => ComplexSpec, (s) => s.complex)
  specs: ComplexSpec[];

  @OneToMany(() => Gallery, (g) => g.complex)
  gallery: Gallery[];
}
