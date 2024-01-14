import { Cat } from "src/models/cat/cat.model";

export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: Cat
  },
];