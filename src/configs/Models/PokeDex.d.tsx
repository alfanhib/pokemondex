
export interface Ability2 {
      name: string;
      url: string;
  }

export interface Ability {
      ability: Ability2;
      is_hidden: boolean;
      slot: number;
  }

export interface Form {
      name: string;
      url: string;
  }

export interface Species {
      name: string;
      url: string;
  }

export interface Stat2 {
      name: string;
      url: string;
  }

export interface Stat {
      base_stat: number;
      effort: number;
      stat: Stat2;
  }

export interface Type2 {
      name: string;
      url: string;
  }

export interface Type {
      slot: number;
      type: Type2;
  }

export interface IPokeDex {
      sprites: any;
      abilities: Ability[];
      base_experience: number;
      height: number;
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      name: string;
      order: number;
      past_types: any[];
      species: Species;
      stats: Stat[];
      types: Type[];
      weight: number;
  }

export interface IPokeType {
    name: string;
    url: string;
}