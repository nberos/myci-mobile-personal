import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';

import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import ForgotPasswordWrapper from '../../components/UI/ForgotPasswordWrapper';

import {ChangePassword} from '../../services/NetworkManager';
import {useSelector} from 'react-redux';
import {selectForgotpassword} from '../../redux/reducers/forgotpassword/forgotpassword.selectors';

const FPNew = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {username} = useSelector(selectForgotpassword);

  const confirmPasswordHandler = async () => {
    try {
      if (newPassword === confirmPassword) {
        const response = await ChangePassword(username, newPassword);
      }
      console.log('error');
    } catch (error) {
      console.log(error);
    }
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
