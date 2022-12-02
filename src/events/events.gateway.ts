import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Episode } from 'src/episode/entities/episode.entity';
import { GamePlayService } from 'src/gamePlay/gameplay.service';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3001'],
  },
  namespace: 'game-play',
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