import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen.tsx';
import TakePhotoScreen from './src/TakePhotoScreen.tsx';
import SelectPhotoScreen from './src/SelectPhotoScreen.tsx';
import StyleListScreen from './src/StyleListScreen.tsx';
import ResultScreen from './src/ResultScreen.tsx';
import Settings from './src/Settings.tsx';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TakePhoto" component={TakePhotoScreen} />
        <Stack.Screen name="SelectPhoto" component={SelectPhotoScreen} />
        <Stack.Screen name="StyleList" component={StyleListScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
