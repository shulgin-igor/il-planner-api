import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  founded: number;

  @Column()
  inProgressCount: number;

  @Column()
  completedCount: number;

  @Column()
  website: string;

  @Column()
  phone: string;

  @Column()
  logo: string;
}
