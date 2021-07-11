import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gallery } from './gallery.entity';

@Entity()
export class GalleryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  url: string;

  @OneToOne(() => Gallery)
  @JoinColumn()
  gallery: Gallery;
}
