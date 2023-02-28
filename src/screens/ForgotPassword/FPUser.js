import {View, Text, StyleSheet} from 'react-native';

import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import ForgotPasswordWrapper from '../../components/UI/ForgotPasswordWrapper';
import {useState} from 'react';
import ForgotPasswordCode from '../../components/Modals/ForgotPasswordCode';

const FPUser = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [showCode, setShowCode] = useState(false);

  const goToNewHandler = () => {
    setShowCode(!showCode);
    // navigation.replace('FPNew');
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
        <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" onPress={goToNewHandler} />
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
