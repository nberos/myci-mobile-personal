import {createStackNavigator} from '@react-navigation/stack';
import {useEffect} from 'react';

import MainBottom from './MainBottom';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  useEffect(() => {});

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainScreen" component={MainBottom} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
