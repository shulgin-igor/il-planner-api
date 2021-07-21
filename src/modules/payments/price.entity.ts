import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apartment } from '../apartments/apartment.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  date: Date;

  @ManyToOne(() => Apartment)
  apartment: Apartment;
}
