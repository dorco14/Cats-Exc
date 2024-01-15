import { UUID } from "crypto";
import { TMouse } from "./mouse";

export type TCat = {
    id?: UUID;
    firstName: string;
    lastName: string;
    image: string;
    description: string;
    mice: TMouse[] | [];
}