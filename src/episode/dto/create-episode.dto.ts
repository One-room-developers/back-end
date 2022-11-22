import { IsString, IsNumber } from 'class-validator';

export class CreateEpisodeDTO {
  @IsNumber()
  readonly id: number;

  @IsNumber()
  readonly genre: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly mainText: string;

  @IsString()
  readonly optionText1: string;
  
  @IsString()
  readonly optionText2: string;

  @IsString()
  readonly optionText3: string;
}