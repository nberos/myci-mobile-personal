import {StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';
import PasswordCard from '../../components/Cards/PasswordCard';
import {useDispatch} from 'react-redux';
import {setRegisterData} from '../../redux/reducers/registration/registration.actions';
import {
  AuthorizeCustomer,
  RegisterCustomer,
} from '../../services/NetworkManager';
import {setTokens} from '../../utils/storage';
import MainHeader from '../../components/UI/MainHeader';

const Password = ({navigation, route}) => {
  const [password, setPassword] = useState('paroli111');
  const [repeatPassword, setRepeatPassword] = useState('paroli111');
  const dispatch = useDispatch();

  const {customerType, userName, firstName, lastName} = route.params;

  const navigateToNextHandler = async () => {
    const userData = {
      customerType: customerType,
      firstName: firstName,
      userName: userName,
      lastName: lastName,
      password: password,
    };

    try {
      if (password === repeatPassword) {
        dispatch(setRegisterData(userData));
        const response = await RegisterCustomer(userData);

        if (response.status === 201) {
          const authUserResponse = await AuthorizeCustomer({
            password: password,
            username: userName,
          });

          if (authUserResponse.status === 201) {
            await setTokens(authUserResponse.data);
            navigation.navigate('ContactInfo');
          }
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <MainHeader />
        <RegistrationTitle title="დააყენეთ პაროლი" />
        <PasswordCard />
        <View style={styles.formContainer}>
          <Input
            placeholder="ახალი პაროლი"
            value={password}
            setValue={setPassword}
          />
          <Input
            placeholder="გაიმეორეთ პაროლი"
            value={repeatPassword}
            setValue={setRepeatPassword}
          />
          <Button title="გაგრძელება" onPress={navigateToNextHandler} />
        </View>
        <RegistrationFooter navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 16,
    rowGap: 12,
    paddingHorizontal: 10,
    marginBottom: 26,
  },
});
