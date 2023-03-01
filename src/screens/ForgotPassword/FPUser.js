import {View, Text, StyleSheet} from 'react-native';

import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import ForgotPasswordWrapper from '../../components/UI/ForgotPasswordWrapper';
import {useState} from 'react';
import ForgotPasswordCode from '../../components/Modals/ForgotPasswordCode';

import {SendOTP, GetOTPDuration, CheckOTP} from '../../services/NetworkManager';
import {useDispatch, useSelector} from 'react-redux';
import {
  setDuration,
  setUserName,
} from '../../redux/reducers/forgotpassword/forgotpassword.actions';
import {selectForgotpassword} from '../../redux/reducers/forgotpassword/forgotpassword.selectors';

const FPUser = ({navigation}) => {
  const [username, setUsername] = useState('25001047858');
  const [usernameEntered, setUsernameEntered] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const {code} = useSelector(selectForgotpassword);
  const dispatch = useDispatch();

  const sendOTP = async () => {
    try {
      const sendotpResult = await SendOTP(username);

      if (sendotpResult.status === 204) {
        const otpDurationStatus = await GetOTPDuration();
        console.log(otpDurationStatus.data.seconds);
        dispatch(setDuration(otpDurationStatus.data.seconds));
        dispatch(setUserName(username));
        setShowCode(true);
        setUsernameEntered(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkOTP = async () => {
    if (!usernameEntered) {
      sendOTP();
    } else {
      try {
        const checkotpResult = await CheckOTP(username, code);

        if (checkotpResult.status === 204) {
          navigation.replace('FPNew');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ForgotPasswordWrapper>
      <View style={styles.inputContainer}>
        <Input
          placeholder="მომხმარებელი"
          value={username}
          setValue={setUsername}
        />
        {showCode && <ForgotPasswordCode />}
        <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" onPress={checkOTP} />
      </View>
    </ForgotPasswordWrapper>
  );
};

export default FPUser;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 15,
    rowGap: 12,
    marginTop: 22,
    marginBottom: 50,
  },
});
