import React, {FC, ReactElement} from "react";
import {View, Image, Pressable} from 'react-native'
import Header from "@components/molecules/Header";
import { ScrollView, } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles'
import TextPoke from "@components/atoms/TextPoke";
import PokeType from "@components/atoms/PokeType";
import { IPokeDex } from "@configs/Models/PokeDex.d";

interface DetailPokemonView extends IPokeDex {
  data: IPokeDex;
}

const DetailPokemonView: FC<DetailPokemonView> = ({data}): ReactElement => {

  const listImage = [{},{},{},{},{},{}]

  const arrayChunk = (arr: any[], n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const _renderItem = ({label, value, index}: any) => {
    return(
      <View style={styles.row} key={index}>
        <TextPoke lg bold style={styles.label}>{label}</TextPoke>
        <TextPoke lg style={styles.value} translate={false}>{value}</TextPoke>
      </View>
    )
  }

  const _renderItemStat = ({item, index}: any) => {
    return(
      <View style={styles.containerStat} key={index}>
        <TextPoke translate={false} h2 md={false}>{item.base_stat}</TextPoke>
        <TextPoke translate={false}>{item.stat?.name}</TextPoke>
      </View>
    )
  }

  const _renderItemEvolution = ({index, indexRow}: any) => {
    const lastRow = listImage.length / 2 === indexRow + 1
    const isRenderArrow = index + 1 === listImage.length

    return(
      <View style={styles.containerEvolution}>
        <View style={styles.contentImg}>
          <Image source={{uri: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'}} style={styles.imgEvolution}/>
          <Entypo name="arrow-long-right" style={styles.iconRight} />
        </View>
        <TextPoke style={styles.pokemonName} translate={false}>Pokemon evalution state 1 name</TextPoke>
      </View>
    )
  }

  const _renderAbility = ({label, value}: any) => {
    return(
      <View style={styles.row}>
        <TextPoke md bold style={styles.label}>{label}</TextPoke>
        <View>
          {value.map((item: any, index: number) => {
            return(
              <TextPoke key={index} md style={styles.ability} translate={false}>{`• ${item.ability.name}`}</TextPoke>
            )
          })}
        </View>
      </View>
    )
  }

  const _renderType = ({label, value}: any) => {
    return(
      <View style={styles.row}>
        <TextPoke md bold style={styles.label}>{label}</TextPoke>
        <View>
        {arrayChunk(value, 2).map((row, index) => {
          return(
            <View key={index} style={styles.row}>
              {row.map((item, index) => {
                const type = item?.type?.name;
                return(
                  <PokeType type={type} index={index} />
                )
              })}
            </View>
          )
        })}
        </View>
      </View>
    )
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.header}>
        <Header />
      </View>
      <TextPoke h1 md={false} style={styles.title} translate={false}>
        {data.name}
      </TextPoke>
      <Image source={{uri: data.sprites?.front_default}} style={styles.image}/>
      <View>
        {_renderItem({label: 'dashboard.label.weight', value: `${data.weight} kg`})}
        {_renderItem({label: 'dashboard.label.height', value: `${data.height} m`})}
        {/* {_renderAbility({label: 'dashboard.label.ability', value: [{}]})}
        {_renderType({label: 'dashboard.label.type', value: [{}]})} */}
      </View>

      <View style={{marginBottom: 24}}>
        <TextPoke h3 md={false} style={styles.title}>pokemonDetail.otherImage</TextPoke>
        {arrayChunk(listImage, 3).map((row, index) => {
          return(
            <View style={styles.rowImage}>
              {row.map((item, index) => {
                return(
                  <Image source={{uri: data.sprites?.front_default}} style={styles.imageSmall}/>
                )
              })}
            </View>
          )
        })}
      </View>

      <View style={{marginBottom: 24}}>
        <TextPoke h3 md={false} style={styles.title}>pokemonDetail.otherImage</TextPoke>
        {arrayChunk(data.stats, 3).map((row, index) => {
          return<View style={styles.rowImage}>
            {row.map((item, index) => {
              return(
                _renderItemStat({item, index})
              )
            })}
          </View>
        })}
      </View>

      <View style={{marginBottom: 24}}>
        <TextPoke h3 md={false} style={styles.title}>pokemonDetail.otherImage</TextPoke>
        {arrayChunk(listImage, 2).map((row, indexRow) => {
          return<View style={styles.rowEvolution}>
            {row.map((item, index) => {
              return(
                _renderItemEvolution({index: index, indexRow: indexRow})
              )
            })}
          </View>
        })}
      </View>

    </ScrollView>
  )
}

export default React.memo(DetailPokemonView);