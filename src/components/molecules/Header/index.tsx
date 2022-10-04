import React, {FC, ReactElement} from "react";
import {View, Text, SafeAreaView, Image, Pressable} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import TextPoke from "@components/atoms/TextPoke";
import logo from '../../../assets/images/logo.png';
import {IPokeType} from '@configs/Models/PokeDex.d';
import styles from './styles'

interface HeaderProps {
  typePokemon?: IPokeType[];
}

const Header: FC<HeaderProps> = ({typePokemon}): ReactElement => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logo}/>
          <Entypo name="menu" size={styles.icon.size} color={styles.icon.color}/>
        </View>
     
    </View>
  );
}

export default React.memo(Header);