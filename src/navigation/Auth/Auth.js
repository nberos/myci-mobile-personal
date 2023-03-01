import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Auth/Login';
import HLogo from '../../assets/svg/logo blc.svg';
import Burger1 from '../../assets/svg/burger.svg';
import FPUser from '../../screens/ForgotPassword/FPUser';
import FPNew from '../../screens/ForgotPassword/FPNew';

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
      <AuthStack.Screen name="FPUser" component={FPUser} />
      <AuthStack.Screen name="FPNew" component={FPNew} />
    </AuthStack.Navigator>
  );
};

export default Auth;
