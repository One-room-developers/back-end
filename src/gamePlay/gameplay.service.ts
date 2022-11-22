import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Episode } from 'src/episode/entities/episode.entity';
import { CreateEpisodeDTO } from '../episode/dto/create-episode.dto';
import { Repository } from 'typeorm';

@Injectable()
export class GamePlayService {
  constructor(
    @InjectRepository(Episode) private episodeRepo: Repository<Episode>,
  ) {}

  async createEpisode(createEpisodeDto: CreateEpisodeDTO) {
    try {
      const episode = new Episode();

      episode.title = createEpisodeDto.title;
      episode.mainText = createEpisodeDto.mainText;
      episode.optionText1 = createEpisodeDto.optionText1;
      episode.optionText2 = createEpisodeDto.optionText2;
      episode.optionText3 = createEpisodeDto.optionText3;

      await this.episodeRepo.insert(episode);
      return { msg: 'success', successMsg: '에피소드 생성 성공' };
    } catch (err) {
      throw new NotFoundException(`Can't create episode`);
    }
  }

  async getEpisodeById(id: number): Promise<Episode> {
    const episode = await this.episodeRepo.findOne({
      where: { id },
    });
    return episode;
  }
}