import {StyleSheet, Text, View} from 'react-native';

import Input from '../../components/Inputs/Input';

import BLogo from '../../assets/svg/1.svg';
import Greeting from '../../assets/svg/გამარჯობა.svg';
import Button from '../../components/Buttons/Button';
import Link from '../../components/Buttons/Link';

import ApiManager from '../../services/ApiClient';
import {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loggedIn from '../../navigation/LoggedIn/LoggedIn';

const URL = 'https://myci.dev.ol.ge/mci-back';
const AUTH = '/resources/front/auth';

const Login = () => {
  const [username, setUsername] = useState('admin@admin.com');
  const [password, setPassword] = useState('admin@admin.com');

  const authButtonHandler = async () => {
    try {
      const response = await fetch(URL + AUTH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {password: password, username: username},
      });

      console.log(response);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <View style={{flex: 1}}>
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
          />
          <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" onPress={authButtonHandler} />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text>არ გაქვს ანგარიში? </Text>
        <Link title="რეგისტრაცია" />
      </View>
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
  },
  footerContainer: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 34,
    flexDirection: 'row',
  },
});
