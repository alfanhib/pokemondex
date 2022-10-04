import React, {FC, ReactElement} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native'
import styles from './styles' 

interface PokeType {
  type: string;
  index: number;
}

const PokeType: FC<PokeType> = ({type,index}): ReactElement => {

  const getBGColor = (type: string) => {
    switch (type) {
      case "grass":
        return StyleSheet.create({
          container: {
            backgroundColor: "#01B956"
          }
        })
      case "fire":
        return StyleSheet.create({
          container: {
            backgroundColor: "#DE2C2C"
          }
        })
      case "water":
        return StyleSheet.create({
          container: {
            backgroundColor: "#2C9DE2"
          }
        })
      case "earth":
        return StyleSheet.create({
          container: {
            backgroundColor: "#FFA756"
          }
        })
      case "poison":
        return StyleSheet.create({
          container: {
            backgroundColor: "#2e2e22"
          }
        })
      default:
        return StyleSheet.create({
          container: {
            backgroundColor: "#01B956"
          }
        })
    }
  }

  const container = StyleSheet.compose(getBGColor(type).container, styles.type as any)

  return (
    <Pressable key={index}  style={container}>
      <Text style={styles.textType}>{type}</Text>
    </Pressable>
  )
}

export default React.memo(PokeType);