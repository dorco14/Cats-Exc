import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsString()
   firstName: string;

  @IsString()
   lastName: string;

  @IsString()
   image: string;
  
  @IsString()
   description: string;
}