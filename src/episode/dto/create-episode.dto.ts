import { IsDate, IsNumber, IsString } from 'class-validator';
import { Options } from '../entities/option.entity';

export class CreateEpisodeDTO {

  @IsNumber()
  readonly genre: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly mainText: string;

  readonly options: Options;
}