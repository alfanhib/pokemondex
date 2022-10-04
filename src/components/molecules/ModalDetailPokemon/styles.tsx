import {StyleSheet} from 'react-native'
import {Colors} from '../../../color'

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent:'flex-end'
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    maxHeight: '80%',
    alignSelf: 'flex-end',
    paddingTop: 12,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 36
  },
  divider: {
    backgroundColor: "#D0D3D4",
    height: 5,
    width: '50%',
    alignSelf:'center',
    borderRadius: 2.5,
    marginBottom: 24,
    position: 'absolute',
    bottom: "75%"
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    lineHeight: 48,
    color: Colors().textH3,
    marginVertical: 24
  },
  imgPokemon: {
    width: 264,
    height: 264,
    alignSelf:'center',
    marginBottom: 24
  },
  row: {
    flexDirection: 'row',
    marginBottom: 24
  },
  label: {
    width: '40%',
    marginRight: 12
  },
  value: {
    flex: 1
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
  buttonDetail: {
    backgroundColor: Colors().button,
    width: 240,
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    alignSelf:'center'
  },
  moreDetail: {
    color: "#fff",
  },
  buttonClose: {
    width: '100%',
    alignSelf:'center',
    position: 'absolute',
    bottom: "75%"
  }
})

export default styles