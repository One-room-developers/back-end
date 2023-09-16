import { IsNumber, IsString } from 'class-validator';

export class UpdateCommentDTO {

  @IsNumber()
  readonly comment_id: number;

  @IsString()
  readonly password: string;

  @IsString()
  readonly comment: string;
}