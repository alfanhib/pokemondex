import { StyleSheet } from 'react-native'
import { Colors } from '../../../color/index';

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors().background,
    paddingHorizontal: 24
  },
  header: {
    marginBottom: 24
  },
  title: {
    marginBottom: 24,
    color: Colors().textH1
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 24
  },
  row: {
    flexDirection: 'row',
    marginBottom: 24
  },
  rowImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  label: {
    width: '40%',
    marginRight: 12,
    color: Colors().textH1,
  },
  value: {
    flex: 1,
    color: Colors().textH1

  },
  ability: {
    marginBottom: 12
  },
  type: {
    margin: 2,
    width: 64,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textType: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#fff',
  },
  imageSmall: {
    width: 86,
    height: 86,
  },
  containerStat: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerEvolution: {
    flex: -1
  },
  contentImg: {
    flexDirection: 'row',
  },
  imgEvolution: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 12
  },
  iconRight: {
    fontSize: 24,
    alignSelf: 'center',
    marginRight: 12

  },
  pokemonName: {
    width: 100,
    textAlign: 'center',
  },
  rowEvolution: {
    flexDirection: 'row',
  }
})

export default styles