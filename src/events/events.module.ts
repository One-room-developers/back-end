import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from './events.gateway';
import { Episode } from 'src/episode/entities/episode.entity';
import { Options } from 'src/episode/entities/option.entity';
import { GamePlayService } from 'src/gamePlay/gameplay.service';

@Module({
  imports: [TypeOrmModule.forFeature([Episode, Options])],
  providers: [EventsGateway, GamePlayService],
})
export class EventsModule {}