import React from "react";
import { connect } from 'react-redux';
import HomeView from "@components/organisms/HomeView";
import { fetchListPokemonAction, getDataTypePokemon } from '../../configs/Redux/Reducer/Pokemon/action'
import { IPokeDex, IPokeType } from '@configs/Models/PokeDex.d';

interface Props{
  navigation: any;
  reqGetListPokemon: (limit: number) => void;
  listPokemon: IPokeDex[];
  typePokemon: IPokeType[];
  totalPokemon: number;
  reqGetDataTypePokemon: () => void;
}

const Home = (props: Props) => {
  const { reqGetListPokemon, listPokemon, totalPokemon, navigation, reqGetDataTypePokemon, typePokemon } = props;

  const [offset, setOffset] = React.useState(0)
  const [selectedPokemon, setSelectedPokemon] = React.useState<IPokeDex | null>(null)
  const [modalVisible, setModalVisible] = React.useState(false)

  React.useEffect( () => {
    initData()
  },[]);

  const initData = () => {
    reqGetListPokemon(offset)
    setOffset(offset + 5)
    reqGetDataTypePokemon()
  }

  const onPressPokemon = (data: IPokeDex) => {
    setSelectedPokemon(data)
    setModalVisible(true)
  }

  const navigationToDetailPokemon = () => {
    setModalVisible(false)
    return navigation.navigate('PokemonDetail', {data: selectedPokemon})
  }

  const sortedPokemon = listPokemon.sort((a, b) => a.id - b.id)

  return (
   <HomeView 
    totalPokemon={totalPokemon} 
    onLoadMore={initData} 
    listPokemon={sortedPokemon} 
    onPress={onPressPokemon} 
    modalVisible={modalVisible}
    selectedPokemon={selectedPokemon}
    navigationToDetailPokemon={navigationToDetailPokemon}
    onPressClose={() => setModalVisible(!modalVisible)}
    typePokemon={typePokemon}
  />
  );
}

const reduxState = (state: any) => ({
  totalPokemon: state.pokemon.totalPokemon,
  listPokemon: state.pokemon.dataPokemon,
  typePokemon: state.pokemon.typePokemon
});

const reduxDispatch = (dispatch: any) => ({
  reqGetListPokemon: (limit: number) => dispatch(fetchListPokemonAction(limit)),
  reqGetDataTypePokemon: () => dispatch(getDataTypePokemon())
})

export default connect(reduxState, reduxDispatch)(Home)