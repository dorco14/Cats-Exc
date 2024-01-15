import { Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { BaseModel } from '../base.model';
import { Mouse } from '../mouse/mouse.model';

@Table({
  tableName: 'cats'
})
export class Cat extends BaseModel<Cat> {

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  image: string;

  @Column(DataType.STRING)
  description: string;

  @HasMany(() => Mouse)
  mice: Mouse[];
}