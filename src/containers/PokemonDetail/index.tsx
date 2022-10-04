import React from 'react'
import { View, ScrollView } from 'react-native'
import DetailPokemonView from '@components/organisms/DetailPokemonView'

interface PokemonDetailProps {
  navigation: any;
}

const PokemonDetail = (props) => {
  console.log("isi props", props.route.params.data)
  const { data } = props.route.params

  return <DetailPokemonView data={data} />
}

export default React.memo(PokemonDetail)