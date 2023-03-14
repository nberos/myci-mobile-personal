import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';

import Login from '../../screens/Auth/Login';
import FPUser from '../../screens/ForgotPassword/FPUser';
import FPNew from '../../screens/ForgotPassword/FPNew';
import Conditions from '../../screens/Registration/Conditions';
import Confirmation from '../../screens/Registration/Confirmation';
import ContactInfo from '../../screens/Registration/ContactInfo';
import Password from '../../screens/Registration/Password';
import PersonalInfo from '../../screens/Registration/PersonalInfo';
import UserType from '../../screens/Registration/UserType';
import Service from '../../screens/Drawer/Service';
import FAQ from '../../screens/Drawer/FAQ';
import Confidential from '../../screens/Drawer/Confidential';
import PersonSVG from '../../assets/svg/Clip path group.svg';
import ServiceSVG from '../../assets/svg/Clip path group1.svg';
import FAQSVG from '../../assets/svg/Clip path group2.svg';
import ConfSVG from '../../assets/svg/Clip path group3.svg';
import SVGWrapper from '../../components/UI/SVGWrapper';
import Logo from '../../assets/svg/logo blc.svg';
import Facebook from '../../assets/svg/brands-and-logotypes1.svg';
import Email from '../../assets/svg/emailbot.svg';
import Phone from '../../assets/svg/phonelog.svg';
import Languages from '../../assets/svg/Group 6370.svg';
import PersonTab from '../../screens/Tabs/PersonTab';
import CompanyTab from '../../screens/Tabs/CompanyTab';
import DrawerHeader from '../../components/UI/DrawerHeader';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  setServiceCompany,
  setServicePerson,
} from '../../redux/reducers/drawer/drawer.actions';

const AuthStack = createStackNavigator();

const SideDrawer = createDrawerNavigator();

const ServiceTab = createMaterialTopTabNavigator();

function ServiceTabs() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setServicePerson());
    dispatch(setServiceCompany());
  }, []);

  return (
    <>
      <DrawerHeader navigation={navigation} title="ᲛᲝᲛᲡᲐᲮᲣᲠᲔᲑᲐ" />
      <ServiceTab.Navigator screenOptions={{}}>
        <ServiceTab.Screen
          name="PersonTab"
          component={PersonTab}
          options={{title: 'ფიზიკური'}}
        />
        <ServiceTab.Screen
          name="ComapanyTab"
          component={CompanyTab}
          options={{title: 'იურიდიული'}}
        />
      </ServiceTab.Navigator>
    </>
  );
}

const CustomDrawerContent = props => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 8, marginBottom: 10}}>
          <Logo width={165} height={39} />
        </View>
        <View style={{width: '96%', height: 55, alignSelf: 'flex-end'}}>
          <DrawerItem
            label="შესვლა"
            onPress={() => navigation.navigate('Login1')}
            activeTintColor={'red'}
            inactiveTintColor={'black'}
            labelStyle={{fontSize: 10, marginLeft: -24}}
            icon={() => (
              <SVGWrapper color="rgba(198, 43, 39, 0.2)">
                <PersonSVG width={14} height={14} />
              </SVGWrapper>
            )}
            style={{marginLeft: -8}}
          />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(234, 234, 234, 1)',
            }}></View>
        </View>
        <View style={{width: '96%', height: 55, alignSelf: 'flex-end'}}>
          <DrawerItem
            label="მომსახურება"
            onPress={() => navigation.navigate('Service')}
            activeTintColor={'red'}
            inactiveTintColor={'black'}
            labelStyle={{fontSize: 10, marginLeft: -24}}
            icon={() => (
              <SVGWrapper color="rgba(82, 185, 37, 0.2)">
                <ServiceSVG width={14} height={14} />
              </SVGWrapper>
            )}
            style={{marginLeft: -8}}
          />
          <View
            style={{
              width: '84%',
              height: 1,
              backgroundColor: 'rgba(234, 234, 234, 1)',
              alignSelf: 'flex-end',
            }}></View>
        </View>
        <View style={{width: '96%', height: 55, alignSelf: 'flex-end'}}>
          <DrawerItem
            label="ხშირად დასმული კითხვები"
            onPress={() => navigation.navigate('FAQ')}
            activeTintColor={'red'}
            inactiveTintColor={'black'}
            labelStyle={{fontSize: 10, marginLeft: -24}}
            icon={() => (
              <SVGWrapper color="rgba(226, 155, 20, 0.2)">
                <FAQSVG width={14} height={14} />
              </SVGWrapper>
            )}
            style={{marginLeft: -8}}
          />
          <View
            style={{
              width: '84%',
              height: 1,
              backgroundColor: 'rgba(234, 234, 234, 1)',
              alignSelf: 'flex-end',
            }}></View>
        </View>
        <View style={{width: '96%', alignSelf: 'flex-end'}}>
          <DrawerItem
            label="კონფიდენციალურობა"
            onPress={() => navigation.navigate('Confidential')}
            activeTintColor={'red'}
            inactiveTintColor={'black'}
            labelStyle={{fontSize: 10, marginLeft: -24}}
            icon={() => (
              <SVGWrapper color="rgba(23, 23, 23, 0.2)">
                <ConfSVG width={14} height={14} />
              </SVGWrapper>
            )}
            style={{marginLeft: -8}}
          />
          <View
            style={{
              width: '84%',
              height: 1,
              backgroundColor: 'rgba(234, 234, 234, 1)',
              alignSelf: 'flex-end',
            }}></View>
        </View>
      </View>

      <View style={{alignItems: 'center', width: '100%', marginTop: 72}}>
        <View style={{marginBottom: 8}}>
          <Languages width={180} height={40} />
        </View>
        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: 'rgba(234, 234, 234, 1)',
          }}></View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 12, color: '#000', marginTop: 8}}>
            სს `კრედიტინფო საქართველო`
          </Text>
          <Text style={{textAlign: 'center', fontSize: 11, color: '#000'}}>
            თარხნიშვილის ქ. 2 თბილისი 0179 საქართველო
          </Text>
          <View style={{flexDirection: 'row', columnGap: 16, marginTop: 8}}>
            <SVGWrapper color="rgba(66, 103, 178, 0.2)">
              <Facebook width={16} height={16} />
            </SVGWrapper>
            <SVGWrapper color="rgba(215, 11, 2, 0.2)">
              <Email width={16} height={16} />
            </SVGWrapper>
            <SVGWrapper color="rgba(215, 11, 2, 0.2)">
              <Phone width={16} height={16} />
            </SVGWrapper>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

function SideDrawerNavigator() {
  return (
    <SideDrawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <SideDrawer.Screen name="Login1" component={Login} />
      <SideDrawer.Screen name="Service" component={ServiceTabs} />
      <SideDrawer.Screen name="FAQ" component={FAQ} />
      <SideDrawer.Screen name="Confidential" component={Confidential} />
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
