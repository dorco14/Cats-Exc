import type { UUID } from "crypto";
import type { TMouse } from "./mouse";

export type TCat = {
    id?: UUID;
    firstName: string;
    lastName: string;
    image: string;
    description: string;
    mice: TMouse[] | [];
}