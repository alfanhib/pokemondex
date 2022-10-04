import React, {FC, ReactElement} from "react";
import {View, Text, Image, Alert} from 'react-native'
import styles from "./styles";
import {  StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import {IPokeDex} from '../../../configs/Models/PokeDex.d'
import PokeType from "@components/atoms/PokeType";

interface CardPokemonProps {
  data: IPokeDex;
  onPress: () => void;
}

const CardPokemon: FC<CardPokemonProps> = ({data, onPress}): ReactElement => {

  const { name, id, types } = data;

  const arrayChunk = (arr: any[], n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: data.sprites?.front_default}} style={styles.image}/>
      <Text style={styles.number}>{`#${id}`}</Text>
      <Text style={styles.name}>{name}</Text>
      {arrayChunk(types, 3).map((row, index) => {
        return(
          <View key={index} style={styles.row}>
            {row.map((item, index) => {
              const type = item?.type?.name

              return(
                <PokeType type={type} index={index} />
              )
            })}
          </View>
        )
      })}
    </Pressable>
  );
}

export default React.memo(CardPokemon);