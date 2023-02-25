import {createStackNavigator} from '@react-navigation/stack';

import MainBottom from './MainBottom';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainScreen" component={MainBottom} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
