import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { Character } from 'src/character/entities/character.entity';
import { Episode } from 'src/episode/entities/episode.entity';
import { Options } from 'src/episode/entities/option.entity';
import { GamePlayService } from 'src/gamePlay/gameplay.service';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000'],
  },
})
export class EventsGateway {
  constructor(private readonly gamePlayService: GamePlayService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  @SubscribeMessage('show_episode')
  async showEpisode(@MessageBody() data: number): Promise<Episode> {
    return this.gamePlayService.getEpisode(data);
  }
}