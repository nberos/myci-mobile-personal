import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import Auth from './Auth/Auth';
import MainStackNavigator from './Main/MainStack';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <Auth />
    </NavigationContainer>
  );
};

export default Navigation;
