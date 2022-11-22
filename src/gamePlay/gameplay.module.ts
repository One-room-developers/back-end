import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from 'src/episode/entities/episode.entity';
import { GamePlayController } from './gameplay.controller';
import { GamePlayService } from './gameplay.service';

@Module({
  imports: [TypeOrmModule.forFeature([Episode])],
  controllers: [GamePlayController],
  providers: [GamePlayService],
})

export class GamePlayModule {}