/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import AppRoute from './src/configs/Navigation/index';
import React, {type PropsWithChildren} from 'react';
import { SafeAreaView } from 'react-native';
import { Colors } from 'color';
import { Provider } from "react-redux";
import { store } from './src/configs/Redux/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors().background}}>
      <Provider store={store}>
          <AppRoute />
      </Provider>
    </SafeAreaView>
  )
};


export default App;
