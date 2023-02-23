import {StyleSheet, Text, View} from 'react-native';

import Input from '../../components/Inputs/Input';

import BLogo from '../../assets/svg/1.svg';
import Greeting from '../../assets/svg/გამარჯობა.svg';
import Button from '../../components/Buttons/Button';
import Link from '../../components/Buttons/Link';

import ApiManager from '../../services/ApiClient';

const Login = () => {
  const presshandler = async () => {
    const response = await ApiManager.get('/users');
    console.log(response);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <BLogo width={175} height={203} />
          <Greeting width={131} height={18} />
        </View>
        <View style={styles.authContainer}>
          <Input placeholder="მომხმარებელი" type="email" />
          <Input
            placeholder="პაროლი"
            type="password"
            style={{marginTop: 32.5}}
            icon={true}
          />
          <Link
            title="დაგავიწყდა პაროლი?"
            style={{fontSize: 11, position: 'absolute', right: 15, top: 9}}
          />
          <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" onPress={presshandler} />
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
