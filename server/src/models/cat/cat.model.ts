import { Entity, PrimaryKey, Property, OneToMany } from "@mikro-orm/core";
import { Mouse } from "../mouse/mouse.model";

@Entity()
export class Cat {
  @PrimaryKey()
  id!: number;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  image!: string;

  @Property()
  description!: string;

  @OneToMany(() => Mouse, 'cat')
  mice = new Array<Mouse>();

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}

// export class Cat extends Model<Cat> {
//   @PrimaryKey
//   @AutoIncrement
//   @Column(DataType.INTEGER)
//   id: number;

//   @Column(DataType.STRING)
//   firstName: string;

//   @Column(DataType.STRING)
//   lastName: string;

//   @Column(DataType.STRING)
//   image: string;

//   @Column(DataType.STRING)
//   description: string;

//   @HasMany(() => Mouse)
//   mice: Mouse[];
// }