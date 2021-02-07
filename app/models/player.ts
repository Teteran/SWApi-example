import { Person, Starship } from '.';

export interface Player {
  id: number;
  score: number;
  card?: Person;
}
