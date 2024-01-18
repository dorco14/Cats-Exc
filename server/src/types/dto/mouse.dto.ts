import { IsString } from 'class-validator';

export class CreateMouseDto {
  @IsString()
  name: string;

  @IsString()
  catId: string;
}