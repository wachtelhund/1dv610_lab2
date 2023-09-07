import { Size } from './Sizes';

export interface MonstersResponse {
  count: number;
  results: MonsterResponseEntry[];
}

export interface MonsterResponseEntry {
  index: string;
  name: string;
  url: string;
}

export interface MonsterResponse {
  index: string;
  name: string;
  desc: string[];
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  image: string;
  size: Size;
  type: string;
  challenge_rating: number;
}