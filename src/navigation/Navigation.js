import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from '../redux/reducers/auth/auth.actions';
import {selectAuth} from '../redux/reducers/auth/auth.selectors';
import {getTokens} from '../utils/storage';

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
  const {isToken} = useSelector(selectAuth);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const fn = async () => {
      const {accessToken, refreshToken} = await getTokens();

      if (accessToken && refreshToken) {
        dispatch(setToken({accessToken, refreshToken}));
      }
    };

    fn();
  }, []);

  return (
    <NavigationContainer theme={LightTheme}>
      {!isToken ? <Auth /> : <MainStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
