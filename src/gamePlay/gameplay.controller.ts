import { Controller, Get, Param, Post, Render, Body } from '@nestjs/common';
import { CreateEpisodeDTO } from 'src/episode/dto/create-episode.dto';
import { GamePlayService } from './gameplay.service';

@Controller('game_play')
export class GamePlayController {
  constructor(private readonly gamePlayService: GamePlayService) {}

  @Get()
  @Render('game_play')
  root() {}

  @Get(':id')
  getOne(@Param('id') episodeId: number) {
    return this.gamePlayService.getEpisodeById(episodeId);
  }

  @Post()
  async create(@Body() createEpisodeDto: CreateEpisodeDTO) {
    return await this.gamePlayService.createEpisode(createEpisodeDto);
  }
}