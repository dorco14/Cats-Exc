import { Column, Model, Table, PrimaryKey, DataType, AutoIncrement, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Cat } from "../cat/cat.model";

@Table({
    tableName: "mice"
})

export class Mouse extends Model<Mouse> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.STRING)
    name: string;

    @ForeignKey(() => Cat)
    @Column
    catId: number;

    @BelongsTo(() => Cat)
    cat: Cat;
}