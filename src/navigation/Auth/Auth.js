import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../../screens/Auth/Login';
import MainBottom from '../Main/MainBottom';

import HLogo from '../../assets/svg/logo blc.svg';
import Burger1 from '../../assets/svg/burger.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectAuth} from '../../redux/reducers/auth/auth.selectors';

const AuthStack = createStackNavigator();

const Auth = () => {
  const {isToken} = useSelector(state => state.authReducer);
  // const tokens = useSelector(selectTokens);

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'transparent'},
        headerRight: () => <Burger1 width={18} height={8} />,
        headerLeft: () => <HLogo width={165} height={40} />,
        headerRightContainerStyle: {paddingHorizontal: 15},
        headerLeftContainerStyle: {paddingHorizontal: 15},
        title: '',
      }}>
      {!isToken ? (
        <AuthStack.Screen name="Login" component={Login} />
      ) : (
        <AuthStack.Screen name="MainScreen" component={MainBottom} />
      )}
    </AuthStack.Navigator>
  );
};

export default Auth;
