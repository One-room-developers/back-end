import { Episode } from '../../episode/entities/episode.entity';
import { JoinColumn, OneToOne, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test_character')
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Episode, episode => episode.character)
  @JoinColumn({
    name: 'current_episode_id',
    referencedColumnName: 'id',
  })
  episode: Episode;

  @Column()
  health: number;

  @Column()
  money: number;

  @Column()
  hungry: number;

  @Column()
  strength: number;

  @Column()
  agility: number;

  @Column()
  armour: number;

  @Column()
  mental: number;
}