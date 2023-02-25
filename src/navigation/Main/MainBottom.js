import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MainTabs = createBottomTabNavigator();

import Main from '../../screens/Main/Main';
import Other from '../../screens/Main/Other';
import Payments from '../../screens/Main/Payments';
import Score from '../../screens/Main/Score';

import Homesvg from '../../assets/svg/tabbar1.svg';
import Othersvg from '../../assets/svg/tabbar2.svg';
import Paymentssvg from '../../assets/svg/tabbar3.svg';
import Scoresvg from '../../assets/svg/tabbar4.svg';

const MainBottom = () => {
  return (
    <MainTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
      }}>
      <MainTabs.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => {
            return <Homesvg width={23} height={23} />;
          },
        }}
      />
      <MainTabs.Screen
        name="Other"
        component={Other}
        options={{
          tabBarIcon: () => {
            return <Othersvg width={23} height={23} />;
          },
        }}
      />
      <MainTabs.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: () => {
            return <Paymentssvg width={23} height={23} />;
          },
        }}
      />
      <MainTabs.Screen
        name="Score"
        component={Score}
        options={{
          tabBarIcon: () => {
            return <Scoresvg width={23} height={23} />;
          },
        }}
      />
    </MainTabs.Navigator>
  );
};

export default MainBottom;
