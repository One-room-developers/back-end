import { Options } from './option.entity';
import { OneToMany, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('test_episode')
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  genre: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ length: 20 })
  title: string;

  @Column({ type: 'text' })
  mainText: string;

  @OneToMany(type => Options, options => options.episode)
  options: Options[];
}