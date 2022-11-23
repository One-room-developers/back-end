import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from 'src/episode/entities/episode.entity';
import { Options } from 'src/episode/entities/option.entity';
import { GamePlayController } from './gameplay.controller';
import { GamePlayService } from './gameplay.service';

@Module({
  imports: [TypeOrmModule.forFeature([Episode, Options])],
  controllers: [GamePlayController],
  providers: [GamePlayService],
})

export class GamePlayModule {}