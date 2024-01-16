import { Entity, Property, ManyToOne } from "@mikro-orm/core";
import { Cat } from "../cat/cat.model";
import { BaseModel } from "../base.model";

@Entity()
export class Mouse extends BaseModel {
    @Property()
    name: string;

    @ManyToOne(() => Cat)
    cat!: Cat;
}