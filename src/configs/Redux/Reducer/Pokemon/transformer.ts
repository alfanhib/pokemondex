import { IPokeType, IPokeDex } from "@configs/Models/PokeDex.d";

export const transformerPokemon = (data: any) => {
  const { results } = data;
  const dataPokemon: IPokeDex[] = results.map((item: any) => {
    const { name, url } = item;
    const id = url.split("/")[6];
    return {
      id,
      name,
      url,
    };
  });
  return dataPokemon;
};

export const transformerDetailPokemon = (data: any) => {
  const dataPokemon: IPokeDex = {...data}
  return dataPokemon;
}

export const transformerTypePokemon = (data: any) => {
  const dataPokemon: IPokeType[] = data.map((item: any) => {
    const { name, url } = item;
    const id = url.split("/")[6];
    return {
      id,
      name,
      url}
  });
  return dataPokemon;
}