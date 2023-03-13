import {View, Text, StyleSheet} from 'react-native';
import AuthFooter from '../../components/UI/AuthFooter';

import BLogo from '../../assets/svg/Group 784.svg';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MainHeader from './MainHeader';

const ForgotPasswordWrapper = ({children}) => {
  const navigation = useNavigation();

  const goToAuthHandler = () => navigation.replace('Login');

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <MainHeader />
        <View style={{alignItems: 'center'}}>
          <BLogo width={185} height={185} />
        </View>
        <Text style={{fontSize: 18, color: '#000', textAlign: 'center'}}>
          ᲞᲐᲠᲝᲚᲘᲡ ᲐᲦᲓᲒᲔᲜᲐ
        </Text>
        {children}
        <AuthFooter
          title="ავტორიზაცია"
          text="გაქვს ანგარიში?"
          onPress={goToAuthHandler}
        />
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordWrapper;
