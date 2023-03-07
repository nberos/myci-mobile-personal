import {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Button from '../../components/Buttons/Button';
import Dropdown from '../../components/Inputs/Dropdown';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';
import {setExtraData} from '../../redux/reducers/registration/registration.actions';
import {fetchCountriesData} from '../../redux/reducers/registration/registration.actions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PressableInput from '../../components/Inputs/PressableInput';

const ContactInfo = ({navigation}) => {
  const [date, setDate] = useState();
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dispatch = useDispatch();

  const formattedDate = JSON.stringify(date)?.slice(1, 11);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  const navigateToNextHandler = async () => {
    const extraData = {
      date: date,
      country: country,
      address: address,
      email: email,
    };
    try {
      dispatch(setExtraData(extraData));
      navigation.navigate('Confirmation');
    } catch (error) {}
  };

  return (
    <View style={{flex: 1}}>
      {/* <ScrollView> */}
      <RegistrationTitle title="საკონტაქტო ინფორმაცია" />
      <View style={styles.formContainer}>
        <PressableInput
          placeholder={!formattedDate ? 'დაბადების თარიღი' : formattedDate}
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Dropdown
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
      {/* </ScrollView> */}
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
