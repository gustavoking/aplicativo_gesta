import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenTelaLogin from './src/ScreenTelaLogin/index';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="ScreenTelaLogin"
       screenOptions={{
             headerShown: false 
        }}>
        <Stack.Screen name="ScreenTelaLogin" component={ScreenTelaLogin} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}



