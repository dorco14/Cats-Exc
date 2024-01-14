import { Mouse } from "src/models/mouse/mouse.model";

export const miceProviders = [
  {
    provide: 'MICE_REPOSITORY',
    useValue: Mouse,
  },
];