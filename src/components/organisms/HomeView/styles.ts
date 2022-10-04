import {StyleSheet} from 'react-native';
import { Colors } from 'color';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: Colors().background,
  },
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    backgroundColor: Colors().background,
  },
  imgPokemon: {
    width: 264,
    height: 264,
    marginTop: 24,
    alignSelf: 'center',
    marginBottom: 24,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 36,
    lineHeight: 40,
    color: Colors().textH1,
    marginBottom: 12,
    fontFamily: 'Poppins-Bold',

  },
  subtitle: {
    fontSize: 20,
    color: Colors().secondaryFont,
    lineHeight: 30,
    marginBottom: 32,
    fontFamily: 'Poppins-Regular',

  },
  button: {
    backgroundColor: Colors().button,
    width: 240,
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  textCheck: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins-Bold',
    color: Colors().textButton,
  },
  content: {
    backgroundColor: Colors().primary,
    paddingTop: 24,
    alignItems: 'center'
  },
  titleContent: {
    fontSize: 36,
    lineHeight: 50,
    fontFamily: 'Poppins-Bold',
    color: Colors().textH2,
    marginBottom: 16
  },
  subtitleContent: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
    color: Colors().textH3,
    marginBottom: 50
  },
  buttonLoadMore: {
    marginBottom: 23
  },
  textLoadMore: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Colors().textH3,
  },
});

export default styles