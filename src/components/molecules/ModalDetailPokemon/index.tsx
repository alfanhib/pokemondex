import React, {FC, ReactElement} from 'react'
import {Modal, View, Image, Pressable, StyleSheet} from 'react-native'
import styles from './styles'
import TextPoke from '@components/atoms/TextPoke'
import { ScrollView } from 'react-native-gesture-handler';
import PokeType from '@components/atoms/PokeType';
import { IPokeDex } from '@configs/Models/PokeDex.d';

interface ModalDetailPokemon extends IPokeDex {
  visible: boolean;
  data: IPokeDex;
  onPress: () => void;
  onPressClose: () => void;
}

const ModalDetailPokemon: FC<ModalDetailPokemon> = ({visible, data, onPress, onPressClose}): ReactElement => {

  if(data == null) return <></>

  const arrayChunk = (arr: any[], n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const _renderItem = ({label, value, index}: any) => {
    return(
      <View style={styles.row} key={index}>
        <TextPoke md bold style={styles.label}>{label}</TextPoke>
        <TextPoke md style={styles.value} translate={false}>{value}</TextPoke>
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

  return(
    <Modal transparent={true} visible={visible}>
      <View style={styles.background}>
        <ScrollView style={styles.container}>
          <View>
            <TextPoke style={styles.title} h1 translate={false}>{data.name}</TextPoke>
            <Image source={{uri: data.sprites.front_default}} style={styles.imgPokemon}/>
            {_renderItem({label: 'dashboard.label.weight', value: `${data.weight} kg`})}
            {_renderItem({label: 'dashboard.label.height', value: `${data.height} m`})}
            {_renderAbility({label: 'dashboard.label.ability', value: data.abilities})}
            {_renderType({label: 'dashboard.label.type', value: data.types})}
            <Pressable style={styles.buttonDetail} onPress={onPress}>
              <TextPoke h2 style={styles.moreDetail}>dashboard.moreDetail</TextPoke>
            </Pressable>
          </View>
        </ScrollView>
        <Pressable onPress={onPressClose} style={styles.buttonClose}>
          <View style={styles.divider} />
        </Pressable>
      </View>
    </Modal>
  )
}

export default React.memo(ModalDetailPokemon)