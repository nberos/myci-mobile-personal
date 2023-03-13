import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from '../../screens/Auth/Login';
import FPUser from '../../screens/ForgotPassword/FPUser';
import FPNew from '../../screens/ForgotPassword/FPNew';
import Conditions from '../../screens/Registration/Conditions';
import Confirmation from '../../screens/Registration/Confirmation';
import ContactInfo from '../../screens/Registration/ContactInfo';
import Password from '../../screens/Registration/Password';
import PersonalInfo from '../../screens/Registration/PersonalInfo';
import UserType from '../../screens/Registration/UserType';

const AuthStack = createStackNavigator();

const SideDrawer = createDrawerNavigator();

function SideDrawerNavigator() {
  return (
    <SideDrawer.Navigator screenOptions={{headerShown: false}}>
      <SideDrawer.Screen name="Login1" component={Login} />
    </SideDrawer.Navigator>
  );
}

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={SideDrawerNavigator} />
      <AuthStack.Screen name="FPUser" component={FPUser} />
      <AuthStack.Screen name="FPNew" component={FPNew} />
      <AuthStack.Screen name="Conditions" component={Conditions} />
      <AuthStack.Screen name="Confirmation" component={Confirmation} />
      <AuthStack.Screen name="ContactInfo" component={ContactInfo} />
      <AuthStack.Screen name="Password" component={Password} />
      <AuthStack.Screen name="UserType" component={UserType} />
      <AuthStack.Screen name="PersonalInfo" component={PersonalInfo} />
    </AuthStack.Navigator>
  );
};

export default Auth;
