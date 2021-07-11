import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spec {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
