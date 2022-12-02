import { Controller, Get, Param, Post, Render, Body, Patch } from '@nestjs/common';
import { CharacterDTO } from 'src/character/dto/character.dto';
import { CreateEpisodeDTO } from 'src/episode/dto/createEpisode.dto';
import { CreateOptionsDTO } from 'src/episode/dto/createOptions.dto';
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

  @Post()
  async createEpisode(@Body() createEpisodeDTO: CreateEpisodeDTO) {
    return await this.gamePlayService.createEpisode(createEpisodeDTO);
  }

  @Post('option')
  async createOption(@Body() createOptionsDTO: CreateOptionsDTO) {
    return await this.gamePlayService.createOptions(createOptionsDTO);
  }

  @Post('character')
  async createCharacter(@Body() characterDTO: CharacterDTO) {
    return await this.gamePlayService.createCharacter(characterDTO);
  }

  @Patch('change_character')
  async changeStatus(@Body() characterDTO: CharacterDTO, optionDTO: CreateOptionsDTO) {
    return await this.gamePlayService.changeCharacter(characterDTO, optionDTO);
  }
}