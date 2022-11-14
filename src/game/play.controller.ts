import { Controller, Get, Render } from '@nestjs/common';

@Controller('game_play')
export class PlayController {

  @Get()
  @Render('game_play')
  root() {}
}