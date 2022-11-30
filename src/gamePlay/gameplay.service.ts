import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Episode } from 'src/episode/entities/episode.entity';
import { CreateEpisodeDTO } from '../episode/dto/createEpisode.dto';
import { Repository } from 'typeorm';
import { CreateOptionsDTO } from 'src/episode/dto/createOptions.dto';
import { Options } from 'src/episode/entities/option.entity';
import { CharacterDTO } from 'src/character/dto/character.dto';
import { Character } from 'src/character/entities/character.entity';

@Injectable()
export class GamePlayService {
  constructor(
    @InjectRepository(Episode) private episodeRepo: Repository<Episode>,
    @InjectRepository(Options) private optionsRepo: Repository<Options>,
    @InjectRepository(Character) private characterRepo: Repository<Character>,
  ) {}

  // 에피소드 생성
  async createEpisode(createEpisodeDto: CreateEpisodeDTO) {
    try {
      const episode = new Episode();

      episode.title = createEpisodeDto.title;
      episode.mainText = createEpisodeDto.mainText;

      await this.episodeRepo.insert(episode);
      return { msg: 'success', successMsg: '에피소드 생성 성공' };
    } catch (err) {
      throw new NotFoundException(`Can't create episode`);
    }
  }

  // 선택지 생성
  async createOptions(createOptionsDTO: CreateOptionsDTO) {
    try {
      const option = new Options();

      option.episode = createOptionsDTO.episode;
      option.text = createOptionsDTO.text;
      option.health_change = createOptionsDTO.health_change;
      option.money_change = createOptionsDTO.money_change;
      option.hungry_change = createOptionsDTO.hungry_change;
      option.strength_change = createOptionsDTO.strength_change;
      option.agility_change = createOptionsDTO.agility_change;
      option.armour_change = createOptionsDTO.armour_change;
      option.mental_change = createOptionsDTO.mental_change;

      await this.optionsRepo.insert(option);
      return { msg: 'success', successMsg: '선택지 생성 성공' };
    } catch(err) {
      throw new NotFoundException(`Can't create option`);
    }
  }

  // 캐릭터 생성
  async createCharacter(characterDTO: CharacterDTO) {
    try {
      const character = new Character();

      character.episode = characterDTO.episode;
      character.health = characterDTO.health;
      character.money = characterDTO.money;
      character.hungry = characterDTO.hungry;
      character.strength = characterDTO.strength;
      character.agility = characterDTO.agility;
      character.armour = characterDTO.armour;
      character.mental = characterDTO.mental;

      await this.characterRepo.insert(character);
      return { msg: 'success', successMsg: '캐릭터 생성 성공' };
    } catch (err) {
      throw new NotFoundException(`Can't create character`);
    }
  }

  // 에피소드 호출
  async getEpisode(id: number): Promise<Episode> {
    const episode = await this.episodeRepo.findOne({
      where: { id },
    });
    return episode;
  }

  // 에피소드별 선택지 호출
  async getOptions(episode_id: number): Promise<Options[]> {
    const options = await this.optionsRepo.createQueryBuilder("options")
    .where("options.episodeId = :episodeId", { episodeId: episode_id })
    .getMany()
    return options;
  }

  // 현재 플레이 중인 캐릭터 호출
  async getCharacter(current_episode_id: number): Promise<Character> {
    const character = await this.characterRepo.createQueryBuilder("character")
    .where("character.current_episode_id = :current_episode_id", { current_episode_id: current_episode_id })
    .getOne()
    return character;
  }

  // 현재 플레이 중인 캐릭터 스테이터스 업데이트
  async changeCharacter(characterDTO: CharacterDTO, optionDTO: CreateOptionsDTO) {
    return await this.characterRepo
    .createQueryBuilder()
    .update(Character)
    .set(
      { 
        health: characterDTO.health + optionDTO.health_change, 
        money: characterDTO.money + optionDTO.money_change,
        hungry: characterDTO.hungry + optionDTO.hungry_change,
        strength: characterDTO.strength + optionDTO.strength_change,
        agility: characterDTO.agility + optionDTO.agility_change,
        armour: characterDTO.armour + optionDTO.armour_change,
        mental: characterDTO.mental + optionDTO.mental_change,
      })
    .where("current_episode_id = :current_episode_id", { current_episode_id: characterDTO.episode })
    .execute()
    .then(() => {
      return { msg: 'success', successMsg: '캐릭터 업데이트 성공' };
    })
    .catch(() => {
      throw new NotFoundException(`Can't update character`);
    })
  }
}