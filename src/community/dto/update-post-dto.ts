import { IsNumber, IsString } from 'class-validator';

export class UpdatePostDTO {

  @IsNumber()
  readonly post_id: number;

  @IsString()
  readonly password: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;
}