import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayController } from './game/play.controller';
import { SelectController } from './game/select.controller';

@Module({
  imports: [],
  controllers: [AppController, SelectController, PlayController],
  providers: [AppService],
})
export class AppModule {}
