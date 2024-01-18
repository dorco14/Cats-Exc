import { Model, Column, DataType, PrimaryKey, Default, IsUUID } from 'sequelize-typescript';

export class BaseModel<T> extends Model<T> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @IsUUID(4)
    @Column(DataType.UUID)
    id: string;

    @Column(DataType.DATE)
    createdAt: Date;

    @Column(DataType.DATE)
    updatedAt: Date;
}
