import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Complex } from '../complexes/complex.entity';
import { GalleryItem } from './gallery_item.entity';

@Entity()
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Complex)
  complex: Complex;

  @OneToMany(() => GalleryItem, (i) => i.gallery)
  items: GalleryItem[];
}
