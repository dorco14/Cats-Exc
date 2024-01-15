import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { Cat } from "../cat/cat.model";

@Entity()
export class Mouse {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    catId!: number;

    @ManyToOne(() => Cat)
    cat!: Cat;
}