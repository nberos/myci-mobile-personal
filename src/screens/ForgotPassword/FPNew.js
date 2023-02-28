import {View, Text, StyleSheet} from 'react-native';

import BLogo from '../../assets/svg/Group 784.svg';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import ForgotPasswordWrapper from '../../components/UI/ForgotPasswordWrapper';
import {useState} from 'react';

const FPNew = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const confirmPasswordHandler = () => {
    console.log(newPassword, confirmPassword);
  };

  return (
    <ForgotPasswordWrapper>
      <View style={styles.inputContainer}>
        <Input
          placeholder="ახალი პაროლი"
          value={newPassword}
          setValue={setNewPassword}
        />
        <Input
          placeholder="გაიმეორეთ პაროლი"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" onPress={confirmPasswordHandler} />
      </View>
    </ForgotPasswordWrapper>
  );
};

export default FPNew;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 15,
    rowGap: 12,
    marginTop: 22,
    marginBottom: 50,
  },
});
