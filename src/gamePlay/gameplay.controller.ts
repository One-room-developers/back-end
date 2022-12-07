import { Controller, Get, Param, Post, Render, Body, Patch } from '@nestjs/common';
import { ChangeStatusDTO } from 'src/character/dto/statusChange.dto';
import { CreateEpisodeDTO } from 'src/episode/dto/createEpisode.dto';
import { CreateOptionsDTO } from 'src/episode/dto/createOptions.dto';
import { Episode } from 'src/episode/entities/episode.entity';
import { GamePlayService } from './gameplay.service';


@Controller('game_play')
export class GamePlayController {
  constructor(private readonly gamePlayService: GamePlayService) {}

  @Get()
  @Render('game_play')
  root() {}

  @Get('episode/:id')
  getOne(@Param('id') episode_id: number) {
    return this.gamePlayService.getEpisode(episode_id);
  }

  @Get('options/:id')
  getOptions(@Param('id') episode_id: number) {
    return this.gamePlayService.getOptions(episode_id);
  }

  @Get('character/:id')
  getCharacter(@Param('id') episode_id: number) {
    return this.gamePlayService.getCharacter(episode_id);
  }

  @Post('episode')
  async createEpisode(@Body() createEpisodeDTO: CreateEpisodeDTO) {
    return await this.gamePlayService.createEpisode(createEpisodeDTO);
  }

  @Post('option')
  async createOption(@Body() createOptionsDTO: CreateOptionsDTO) {
    return await this.gamePlayService.createOptions(createOptionsDTO);
  }

  @Post('character/:id')
  async createCharacter(@Param('id') episode_id: Episode) {
    return await this.gamePlayService.createCharacter(episode_id);
  }

  @Patch('change_character/:id')
  async changeStatus(@Param('id') episode_id: number, 
  @Body() changeStatusDTO: ChangeStatusDTO) {
    return await this.gamePlayService.changeStatus(episode_id, changeStatusDTO);
  }
}