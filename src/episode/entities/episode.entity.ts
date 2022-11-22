import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('episode')
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  genre: number;

  @Column({ length: 20 })
  title: string;

  @Column({ type: 'text' })
  mainText: string;

  @Column({ type: 'varchar' })
  optionText1: string;

  @Column({ type: 'varchar' })
  optionText2: string;

  @Column({ type: 'varchar' })
  optionText3: string;
}