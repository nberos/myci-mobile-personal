import {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Buttons/Button';
import Dropdown from '../../components/Inputs/Dropdown';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';
import {setExtraData} from '../../redux/reducers/registration/registration.actions';
import {fetchCountriesData} from '../../redux/reducers/registration/registration.actions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PressableInput from '../../components/Inputs/PressableInput';
import {CustomerExtra, GetCountries} from '../../services/NetworkManager';
import {getTokens} from '../../utils/storage';
import {selectCountriesData} from '../../redux/reducers/registration/registration.selectors';
import {setToken} from '../../redux/reducers/auth/auth.actions';
import {err} from 'react-native-svg/lib/typescript/xml';

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
    const fn = async () => {
      // const {accessToken} = await getTokens();
      const accessToken =
        'eyJhbGciOiJSUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5V1JEVE5hUGhzYTBGaE5yR1ltT1k3UU1jSU40amhGa21sTHU0ZDR2cHA0In0.eyJleHAiOjE2NzgxOTE2NjIsImlhdCI6MTY3ODE5MTM2MiwianRpIjoiZjZjYjhhYWItZDVkNy00ZDY1LWE0MjgtOWM5ZDllODlhNzYwIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMjUuODk6ODA4MC9hdXRoL3JlYWxtcy9kZW1vIiwic3ViIjoiYjc2MDkzZjAtZDRkZi00MmE3LTg2MjUtOWVjMGE2NzdhOTNhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWNyZWRpdGluZm8tZGVtbyIsInNlc3Npb25fc3RhdGUiOiI1YjZhNTY2Yy1iNzA3LTQzZTctYjBjNC03YjMyNjZhZDYzNDIiLCJhY3IiOiIxIiwic2NvcGUiOiIiLCJjdXN0b21lckFjdGlvbnMiOlsiZnJvbnRfbWVtYmVyIiwidHdvX2ZhY3Rvcl9hdXRoX2VuYWJsZV9kaXNhYmxlIiwicHJvZmlsZV9lZGl0IiwicHJvZmlsZV92aWV3Il0sInByb2R1Y3RJZCI6MSwicmVxdWlyZWRNb2JpbGVOdW1iZXJWZXJpZmljYXRpb24iOmZhbHNlLCJzZXNzaW9uIjoiNWI2YTU2NmMtYjcwNy00M2U3LWIwYzQtN2IzMjY2YWQ2MzQyIiwicmVxdWlyZXNXYWxrdGhyb3VnaCI6ZmFsc2UsImNvbXBhbmllcyI6IltdIiwiY3VzdG9tZXJUeXBlIjoiUEVSU09OIiwidHdvRmFjdG9yQXV0aCI6ZmFsc2UsInBhc3N3b3JkUmVzZXQiOmZhbHNlLCJyZXF1aXJlc1dlbGNvbWVQb3B1cCI6ZmFsc2UsInJlcXVpcmVzQWdyZWVtZW50QWNjZXB0IjpmYWxzZSwiY3VzdG9tZXIiOjc3ODAsInN0YXR1cyI6IlJFR0lTVEVSRUQifQ.DJA4YrwsKMXTL4iXYNCG4awqebDnvKqGsUAWIEfUJvUeipC1J7b-tSYDdZJQPcwVyD9xVif2r9FBXKojp307PzriGaNoht_T-uZW34O6FnwKFvEfq2NduRDy39bEVfVTt2l_JeqV2IrUUpuvSJuk0vceUA4BE6pMurH_ZFgd_gIrG3gd9jbg1Q-kOmPEsygVvZcRgOABmDfiEKEESayuE5WEXhmq9ROo5BaI7hrzNgnQ0vyOLD-o6wyzsCn0kN0uX5Lg0fUibNsFDXrMwpJuKMTJqpoXTxzSwxV_KGho4Q0EiEobQaBRXNJ6KtjHku2UlB_So9yipHS4_nrPjo4Nmg';
      dispatch(fetchCountriesData(accessToken));
    };
    fn();
  }, []);

  const navigateToNextHandler = async () => {
    const extraData = {
      birthDate: date,
      countryId: country,
      address: address,
      email: email,
    };

    const accessToken =
      'eyJhbGciOiJSUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5V1JEVE5hUGhzYTBGaE5yR1ltT1k3UU1jSU40amhGa21sTHU0ZDR2cHA0In0.eyJleHAiOjE2NzgxOTE2NjIsImlhdCI6MTY3ODE5MTM2MiwianRpIjoiZjZjYjhhYWItZDVkNy00ZDY1LWE0MjgtOWM5ZDllODlhNzYwIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMjUuODk6ODA4MC9hdXRoL3JlYWxtcy9kZW1vIiwic3ViIjoiYjc2MDkzZjAtZDRkZi00MmE3LTg2MjUtOWVjMGE2NzdhOTNhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWNyZWRpdGluZm8tZGVtbyIsInNlc3Npb25fc3RhdGUiOiI1YjZhNTY2Yy1iNzA3LTQzZTctYjBjNC03YjMyNjZhZDYzNDIiLCJhY3IiOiIxIiwic2NvcGUiOiIiLCJjdXN0b21lckFjdGlvbnMiOlsiZnJvbnRfbWVtYmVyIiwidHdvX2ZhY3Rvcl9hdXRoX2VuYWJsZV9kaXNhYmxlIiwicHJvZmlsZV9lZGl0IiwicHJvZmlsZV92aWV3Il0sInByb2R1Y3RJZCI6MSwicmVxdWlyZWRNb2JpbGVOdW1iZXJWZXJpZmljYXRpb24iOmZhbHNlLCJzZXNzaW9uIjoiNWI2YTU2NmMtYjcwNy00M2U3LWIwYzQtN2IzMjY2YWQ2MzQyIiwicmVxdWlyZXNXYWxrdGhyb3VnaCI6ZmFsc2UsImNvbXBhbmllcyI6IltdIiwiY3VzdG9tZXJUeXBlIjoiUEVSU09OIiwidHdvRmFjdG9yQXV0aCI6ZmFsc2UsInBhc3N3b3JkUmVzZXQiOmZhbHNlLCJyZXF1aXJlc1dlbGNvbWVQb3B1cCI6ZmFsc2UsInJlcXVpcmVzQWdyZWVtZW50QWNjZXB0IjpmYWxzZSwiY3VzdG9tZXIiOjc3ODAsInN0YXR1cyI6IlJFR0lTVEVSRUQifQ.DJA4YrwsKMXTL4iXYNCG4awqebDnvKqGsUAWIEfUJvUeipC1J7b-tSYDdZJQPcwVyD9xVif2r9FBXKojp307PzriGaNoht_T-uZW34O6FnwKFvEfq2NduRDy39bEVfVTt2l_JeqV2IrUUpuvSJuk0vceUA4BE6pMurH_ZFgd_gIrG3gd9jbg1Q-kOmPEsygVvZcRgOABmDfiEKEESayuE5WEXhmq9ROo5BaI7hrzNgnQ0vyOLD-o6wyzsCn0kN0uX5Lg0fUibNsFDXrMwpJuKMTJqpoXTxzSwxV_KGho4Q0EiEobQaBRXNJ6KtjHku2UlB_So9yipHS4_nrPjo4Nmg';

    try {
      if (accessToken) {
        dispatch(setExtraData(extraData));

        const response = await CustomerExtra(extraData, accessToken);

        if (response.status === 200) {
          navigation.navigate('Confirmation');
        }
      }
    } catch (error) {
      throw new Error(error);
    }
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
