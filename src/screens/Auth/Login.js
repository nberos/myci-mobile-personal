import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../../components/Inputs/Input';
import BLogo from '../../assets/svg/1.svg';
import Greeting from '../../assets/svg/გამარჯობა.svg';
import Button from '../../components/Buttons/Button';
import Link from '../../components/Buttons/Link';

import {AuthorizeCustomer} from '../../services/NetworkManager';
import {setToken} from '../../redux/reducers/auth/auth.actions';
import {useDispatch} from 'react-redux';
import {setTokens} from '../../utils/storage';
import InvalidModal from '../../components/Modals/InvalidModal';
import AuthFooter from '../../components/UI/AuthFooter';
import {MainContext} from '../../Context/MainContext';
import MainHeader from '../../components/UI/MainHeader';

// 28888888888
// asernasib1

const Login = ({navigation}) => {
  const [username, setUsername] = useState('12131415111');
  const [password, setPassword] = useState('paroli1111');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const {showDrawer} = useContext(MainContext);

  const dispatch = useDispatch();

  const authButtonHandler = async () => {
    try {
      const response = await AuthorizeCustomer({
        password: password,
        username: username,
      });

      if (response.data) {
        dispatch(setToken(response.data));
        await setTokens(response.data);
      }
    } catch (e) {
      console.log(e);
      setInvalidCredentials(!invalidCredentials);
    }
  };

  const forgotPasswordHandler = () => navigation.replace('FPUser');

  const registrationHandler = () => navigation.navigate('UserType');

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <InvalidModal
        invalidCredentials={invalidCredentials}
        setInvalidCredentials={setInvalidCredentials}
      />
      <ScrollView>
        <MainHeader navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <BLogo width={175} height={203} />
            <Greeting width={131} height={18} />
          </View>
          <View style={styles.authContainer}>
            <Input
              placeholder="მომხმარებელი"
              value={username}
              setValue={setUsername}
            />
            <Input
              placeholder="პაროლი"
              style={{marginTop: 32.5}}
              icon={true}
              value={password}
              setValue={setPassword}
            />
            <Link
              title="დაგავიწყდა პაროლი?"
              style={{fontSize: 11, position: 'absolute', right: 15, top: 9}}
              onPress={forgotPasswordHandler}
            />
            <Button
              title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ"
              onPress={authButtonHandler}
              addStyles={{marginTop: 40}}
            />
          </View>
        </View>
        <AuthFooter
          text="არ გაქვს ანგარიში?"
          title="რეგისტრაცია"
          onPress={registrationHandler}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    gap: 25,
    marginBottom: 50,
  },
  authContainer: {
    width: '100%',
    paddingHorizontal: 15,
    position: 'relative',
    marginBottom: 40,
  },
});
