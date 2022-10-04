import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../containers/Home';
import PokemonDetail from '../../containers/PokemonDetail';

const Stack = createNativeStackNavigator();

const CustomTransition = {
  headerShown: false,
};

function AppRoute(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} options={CustomTransition}/>
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={CustomTransition}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoute;