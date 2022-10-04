import {StyleSheet} from 'react-native';
import {Colors} from '../../../color'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  content: {
    backgroundColor: Colors().background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    backgroundColor: Colors().background
  },
  icon: {
    color: Colors().secondaryFont,
    size: 30
  },
  background: {
    backgroundColor: Colors().background,
    paddingTop: 24,
    paddingHorizontal: 24
  },
  containerButtonPage: {
    borderBottomColor: Colors().secondaryFont,
    borderBottomWidth: 1,
    paddingVertical: 8,
    opacity: 0.5,
    marginBottom: 10
  },
  textPage: {
    color: Colors().secondaryFont,
  }
});

export default styles