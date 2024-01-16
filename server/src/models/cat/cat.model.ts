
import { Entity, Property, OneToMany, Collection } from "@mikro-orm/core";
import { Mouse } from "../mouse/mouse.model";
import { BaseModel } from "../base.model";

@Entity()
export class Cat extends BaseModel {
  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  image: string;

  @Property()
  description: string;

  @OneToMany(() => Mouse, mouse => mouse.cat)
  mice = new Array<Mouse>();
}