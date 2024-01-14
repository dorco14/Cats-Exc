import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Mouse } from '../mouse/mouse.model';

@Table({
  tableName: 'cats'
})
    
export class Cat extends Model<Cat> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

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