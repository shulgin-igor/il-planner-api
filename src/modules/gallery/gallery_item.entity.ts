import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Gallery } from './gallery.entity';

@Entity()
export class GalleryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  description: string;

  @Column()
  url: string;

  @ManyToOne(() => Gallery)
  gallery: Gallery;
}
