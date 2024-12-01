import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CryptoListScreen from './screens/CryptoListScreen';
import CryptoDetailScreen from './screens/CryptoDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptoList">
        <Stack.Screen 
          name="CryptoList" 
          component={CryptoListScreen} 
          options={{ title: 'Criptomonedas' }} 
        />
        <Stack.Screen 
          name="CryptoDetail" 
          component={CryptoDetailScreen} 
          options={{ title: 'Detalle de Criptomoneda' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}