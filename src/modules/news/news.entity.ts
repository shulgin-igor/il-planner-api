import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Complex } from '../complexes/complex.entity';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  text: string;

  @ManyToOne(() => Complex)
  complex: Complex;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
