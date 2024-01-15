import { Column, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Cat } from "../cat/cat.model";
import { BaseModel } from "../base.model";

@Table({
    tableName: "mice"
})
export class Mouse extends BaseModel<Mouse> {
    @Column(DataType.STRING)
    name: string;

    @ForeignKey(() => Cat)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    catId: string;

    @BelongsTo(() => Cat)
    cat: Cat;
}