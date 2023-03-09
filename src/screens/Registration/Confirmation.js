import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useState} from 'react';

import RegisterCard from '../../components/Cards/RegisterCard';
import Phonesvg from '../../assets/svg/phone.svg';
import Emailsvg from '../../assets/svg/email.svg';
import RegistrationTitle from '../../components/UI/RegistrationTitle';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import ForgotPasswordCode from '../../components/Modals/ForgotPasswordCode';
import {
  CheckRegistrationOtp,
  SendRegistrationOtp,
} from '../../services/NetworkManager';
import {getTokens} from '../../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {setOtpData} from '../../redux/reducers/registration/registration.actions';
import {selectForgotpassword} from '../../redux/reducers/forgotpassword/forgotpassword.selectors';

const Confirmation = ({navigation}) => {
  const [activeCard, setActiveCard] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [methodValue, setMethodValue] = useState('');
  const [enteredCode, setEnteredCode] = useState(false);
  const {code} = useSelector(selectForgotpassword);
  const dispatch = useDispatch();

  const onCardPressHandler = val => {
    setActiveCard(val);
  };

  const sendRegisterOtp = async () => {
    try {
      const method = activeCard.toLowerCase().trim();
      // const {accessToken} = await getTokens();
      const accessToken =
        'eyJhbGciOiJSUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5V1JEVE5hUGhzYTBGaE5yR1ltT1k3UU1jSU40amhGa21sTHU0ZDR2cHA0In0.eyJleHAiOjE2NzgzNTMyODgsImlhdCI6MTY3ODM1Mjk4OCwianRpIjoiMzRiMjRmYzQtNzVmNi00MjhlLTg4ZGMtYzUwY2Q1N2M4NjdiIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMjUuODk6ODA4MC9hdXRoL3JlYWxtcy9kZW1vIiwic3ViIjoiZmFhODM0ODQtN2MxNC00MzM3LTk4YjctNTQxYzg3OTFmMGYxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWNyZWRpdGluZm8tZGVtbyIsInNlc3Npb25fc3RhdGUiOiIxMTllN2M4Yi0zNGUyLTQ4OTEtOWNlOS01YWIyMmRmYThmMGYiLCJhY3IiOiIxIiwic2NvcGUiOiIiLCJjdXN0b21lckFjdGlvbnMiOlsiZnJvbnRfbWVtYmVyIiwidHdvX2ZhY3Rvcl9hdXRoX2VuYWJsZV9kaXNhYmxlIiwicHJvZmlsZV9lZGl0IiwicHJvZmlsZV92aWV3Il0sInByb2R1Y3RJZCI6MSwicmVxdWlyZWRNb2JpbGVOdW1iZXJWZXJpZmljYXRpb24iOmZhbHNlLCJzZXNzaW9uIjoiMTE5ZTdjOGItMzRlMi00ODkxLTljZTktNWFiMjJkZmE4ZjBmIiwicmVxdWlyZXNXYWxrdGhyb3VnaCI6ZmFsc2UsImNvbXBhbmllcyI6IltdIiwiY3VzdG9tZXJUeXBlIjoiUEVSU09OIiwidHdvRmFjdG9yQXV0aCI6ZmFsc2UsInBhc3N3b3JkUmVzZXQiOmZhbHNlLCJyZXF1aXJlc1dlbGNvbWVQb3B1cCI6ZmFsc2UsInJlcXVpcmVzQWdyZWVtZW50QWNjZXB0IjpmYWxzZSwiY3VzdG9tZXIiOjc3ODQsInN0YXR1cyI6IlJFR0lTVEVSRUQifQ.dmxDirOUaaz0qEUoKqoYOH7TRMQ6EDgwhIKpiYtGmuPgxBMYWLEINMCIwEC0LdHWy4MpWVq1UiMD_QlVx9tSBRCtq3qZForDqCXMQd6WPmcPMbntB4R7-EnJp8SVPpPTDG4ouZZB7ryyoVXHzNcp0DVRtyF0d3m4yzDB7UnJZlOklquAXQPniTvdb1EhRkaJIlTKOZyXx1CyI0BQMByjwIzix1HvfVzLrnwOe701QiQweVP-Erxd61e5v53DRSJUQxYjd5iKMFgwOrzQTUWU5R3w9Tqfjf5xOvrp6nHEALMsvDdOqmW5IJr4gR-rDTZEuROtgXQ-ONb_tCKXqNVPyg';
      const response = await SendRegistrationOtp(
        method,
        methodValue,
        accessToken,
      );
      if (response.status === 204) {
        setEnteredCode(true);
        setShowCode(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSendHandler = async () => {
    if (!enteredCode) {
      sendRegisterOtp();
    } else {
      try {
        const response = await CheckRegistrationOtp(code);

        if (response.status === 204) {
          navigation.navigate('Conditions');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <RegistrationTitle title="აირჩიეთ დადასტურების მეთოდი" />
        <View style={[styles.cardContainer]}>
          <RegisterCard
            title="ტელეფონი"
            SVG={Phonesvg}
            onPress={onCardPressHandler}
            active={activeCard}
            customerType="PHONE"
          />
          <RegisterCard
            title="ელ.ფოსტა"
            SVG={Emailsvg}
            onPress={onCardPressHandler}
            active={activeCard}
            customerType="EMAIL"
          />
        </View>
        <View style={[styles.bodyContainer, !activeCard && styles.bodyMargin]}>
          {activeCard && (
            <Input
              placeholder={
                activeCard === 'PHONE' ? 'ტელეფონის ნომერი' : 'ელ.ფოსტა'
              }
              value={methodValue}
              setValue={setMethodValue}
            />
          )}
          {showCode && <ForgotPasswordCode />}
          <Button title="ᲒᲐᲒᲖᲐᲕᲜᲐ" onPress={onSendHandler} />
        </View>
        <RegistrationFooter navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  rootContainer: {justifyContent: 'center'},
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 10,
  },
  bodyContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
    gap: 10,
    marginBottom: 96,
  },
  bodyMargin: {
    marginBottom: 155,
  },
});
