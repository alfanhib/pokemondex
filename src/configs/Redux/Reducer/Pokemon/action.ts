import { Dispatch } from "redux";
import { fetchListPokemon, getDetailPokemon, getEvolutionPokemon, fetchDataTypePokemon, } from "./services";
import {POKEMON_DATA_FETCHED, POKEMON_TOTAL, TYPE_POKEMON} from './constants'
import {transformerPokemon, transformerDetailPokemon, transformerTypePokemon} from './transformer'
import { IPokeDex } from '../../../Models/PokeDex.d';

export function fetchListPokemonAction(limit?: number) {
  return (dispatch: Dispatch) => {
    fetchListPokemon(limit)
      .then((res: any) => {
        const data = transformerPokemon(res);
        data.map(async (item: any) => {

          getDetailPokemon(item.url)
          .then((res: any) => {
           let listPokemon: IPokeDex[] = [];

            const pokemonDetail = transformerDetailPokemon(res)
            listPokemon.push(pokemonDetail)
            dispatch(pokemonDataFetched(listPokemon));
          })
          .catch(err => {
          })

          return;
        })
        dispatch(totalPokemon(res.count))

        return data;
      })
      .catch(err => {
        return err
      });
  };
}

export function getDataEvolution(id: string) {
  return (dispatch: Dispatch) => {
    getEvolutionPokemon(id)
      .then((res: any) => {
        return res;
      })
      .catch(err => {
        return err
      });
  };
}

export function getDataTypePokemon() {
  return (dispatch: Dispatch) => {
    fetchDataTypePokemon()
    .then((res: any) => {
      const data = transformerTypePokemon(res.results);
      console.log("isi data", data)
      dispatch(pokemonType(data));
      return data;
    })
    .catch(err => {
      console.log("isi data", err)
      return err
    });
  }
}

const pokemonDataFetched = (data: any[]) => ({
  type: POKEMON_DATA_FETCHED,
  data: data
})

const pokemonType = (data: any[]) => ({
  type: TYPE_POKEMON,
  data: data
})


const totalPokemon = (data: number) => ({
  type: POKEMON_TOTAL,
  data: data
})