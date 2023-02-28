import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Auth/Login';
import MainBottom from '../Main/MainBottom';
import HLogo from '../../assets/svg/logo blc.svg';
import Burger1 from '../../assets/svg/burger.svg';
import MainStackNavigator from '../Main/MainStack';
import UserType from '../../screens/Register/UserType';
import Contacts from '../../screens/Register/Contacts';
import PersonalInfo from '../../screens/Register/PersonalInfo';
import SetPassword from '../../screens/Register/SetPassword';
import VerificationMethod from '../../screens/Register/VerificationMethod';
import Conditions from '../../screens/Register/Conditions';
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
      <AuthStack.Screen name="UserType" component={UserType} />
      <AuthStack.Screen name="Contacts" component={Contacts} />
      <AuthStack.Screen name="PersonalInfo" component={PersonalInfo} />
      <AuthStack.Screen name="SetPassword" component={SetPassword} />
      <AuthStack.Screen
        name="VerificationMethod"
        component={VerificationMethod}
      />
      <AuthStack.Screen name="Conditions" component={Conditions} />
      <AuthStack.Screen name="FPUser" component={FPUser} />
      <AuthStack.Screen name="FPNew" component={FPNew} />
    </AuthStack.Navigator>
  );
};

export default Auth;
