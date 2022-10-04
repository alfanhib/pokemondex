import { IPokeDex, IPokeType } from '@configs/Models/PokeDex.d';
import {POKEMON_TOTAL, POKEMON_DATA_FETCHED, TYPE_POKEMON} from './constants';
interface Action{
  type: string;
  data: any;
}

interface State {
  totalPokemon: number;
  dataPokemon: IPokeDex[];
  typePokemon: IPokeType[];
}


const initialState = {
  totalPokemon: 0,
  dataPokemon: [],
  typePokemon: [],
};

const pokemon = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case POKEMON_DATA_FETCHED:
      return {
        ...state,
        dataPokemon: [...state.dataPokemon, ...action.data],
      };
    case POKEMON_TOTAL:
      return {
        ...state,
        totalPokemon: action.data,
      }
    case TYPE_POKEMON:
      return {
        ...state,
        typePokemon: action.data,
      }
    default:
      return state;
  }
};

export default pokemon;
