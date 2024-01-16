import { Cat } from "src/models/cat/cat.model";

export class CreateMouseDto {
  readonly name: string;
  readonly cat: Cat;
}