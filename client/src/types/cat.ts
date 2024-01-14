import { TMouse } from "./mouse";

export type TCat = {
    id?: number;
    firstName: string;
    lastName: string;
    image: string;
    description: string;
    mice: TMouse[] | [];
}