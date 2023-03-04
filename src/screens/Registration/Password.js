import {StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';
import PasswordCard from '../../components/Cards/PasswordCard';

const Password = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigateToNextHandler = () => {
    navigation.navigate('ContactInfo');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
