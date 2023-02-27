import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Auth/Login';
import MainBottom from '../Main/MainBottom';
import HLogo from '../../assets/svg/logo blc.svg';
import Burger1 from '../../assets/svg/burger.svg';
import MainStackNavigator from '../Main/MainStack';

const AuthStack = createStackNavigator();

const Auth = () => {
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
      <AuthStack.Screen name="Login" component={Login} />
      {/* <AuthStack.Screen name="HomeScreen" component={MainStackNavigator} /> */}
    </AuthStack.Navigator>
  );
};

export default Auth;
