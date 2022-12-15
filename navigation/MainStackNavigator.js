import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import GameOverScreen from '../screens/GameOverScreen';
import GameScreen from '../screens/GameScreen';
import StartGameScreen from '../screens/StartGameScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartGameScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2C903D',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerMode: 'float',
        }}>
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameOverScreen"
          component={GameOverScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="StartGameScreen"
          component={StartGameScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
