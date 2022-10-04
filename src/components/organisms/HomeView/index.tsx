import React, {FC, ReactElement} from "react";
import {View, Image, Pressable, ScrollView, ViewProps, FlatList} from "react-native";
import styles from "./styles";
import Header from "@components/molecules/Header";
import CardPokemon from "@components/molecules/CardPokemon";
import TextPoke from "@components/atoms/TextPoke";
import ModalDetailPokemon from '@components/molecules/ModalDetailPokemon'
import imgPokemon from "assets/images/pokemon.png";
import { IPokeDex, IPokeType } from '../../../configs/Models/PokeDex.d';

type HomeViewProps = {
  typePokemon?: IPokeType[];
  selectedPokemon?: IPokeDex | null;
  modalVisible: boolean;
  listPokemon: IPokeDex[];
  totalPokemon: number;
  onLoadMore: () => void;
  onPress: (data: IPokeDex) => void;
  onPressClose: () => void;
  navigationToDetailPokemon: () => void;
}


const HomeView: FC<HomeViewProps> = ({typePokemon, totalPokemon, onLoadMore, listPokemon, modalVisible, selectedPokemon, onPress, onPressClose, navigationToDetailPokemon}) : ReactElement => {

  return (
    <View>
      <ScrollView nestedScrollEnabled={false} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={imgPokemon} style={styles.imgPokemon}/>
          <TextPoke style={styles.title}>dashboard.title</TextPoke>
          <TextPoke style={styles.subtitle}>dashboard.desc</TextPoke>
          <Pressable style={styles.button}>
            <TextPoke style={styles.textCheck}>dashboard.button</TextPoke>
          </Pressable>
        </View>
        <View style={styles.content}>
          <TextPoke style={styles.titleContent} translate={false}>PokéDex</TextPoke>
          <TextPoke style={styles.subtitleContent} params={{count: totalPokemon}}>dashboard.generatePoke</TextPoke>
          {
            listPokemon.map((item, index) => {
              return(
                <CardPokemon key={index} data={item} onPress={() => onPress(item)} />
              )
            })
          }
          <Pressable onPress={onLoadMore} style={styles.buttonLoadMore}>
            <TextPoke style={styles.textLoadMore}>dashboard.loadMore</TextPoke>
          </Pressable>
          <ModalDetailPokemon 
            visible={modalVisible}
            data={selectedPokemon as IPokeDex}
            onPressClose={onPressClose}
            onPress={navigationToDetailPokemon}
          />
        </View>
      </ScrollView>
      <Header typePokemon={typePokemon}/>
    </View>
  );
}

export default React.memo(HomeView);