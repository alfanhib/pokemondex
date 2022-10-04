import { Colors } from 'color';
import {StyleSheet} from 'react-native';

const getBGColor = (type: string) => {
  switch (type) {
    case "grass":
      return "##01B956"
    case "fire":
      return "#DE2C2C"
    case "water":
      return "#2C9DE2"
    case "earth":
      return "#FFA756"
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 270,
    height: 392,
    marginBottom: 24,
    borderRadius: 24,
    padding: 24,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 12
  },
  number: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Poppins-Bold',
    color: Colors().textH4,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'Poppins-Bold',
    color: Colors().textH3,
    marginBottom: 10
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
  row: {
    flexDirection: 'row',
  }
})

export default styles;