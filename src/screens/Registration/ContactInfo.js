import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';

const ContactInfo = ({navigation}) => {
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const navigateToNextHandler = () => {
    navigation.navigate('Confirmation');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <RegistrationTitle title="საკონტაქტო ინფორმაცია" />
        <View style={styles.formContainer}>
          <Input
            placeholder="დაბადების თარიღი"
            value={date}
            setValue={setDate}
          />
          <Input
            placeholder="აირჩიეთ ქვეყანა"
            value={country}
            setValue={setCountry}
          />
          <Input
            placeholder="შეიყვანეთ მისამართი"
            value={address}
            setValue={setAddress}
          />
          <Input placeholder="ელ.ფოსტა" value={email} setValue={setEmail} />
          <Button title="გაგრძელება" onPress={navigateToNextHandler} />
        </View>
        <RegistrationFooter navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
    rowGap: 8,
    marginBottom: 24,
  },
});
