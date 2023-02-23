import {useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';

import ShowPassword from '../Buttons/ShowPassword';

const Input = ({placeholder, type, style, icon}) => {
  const [showPass, setShowPass] = useState(true);

  const showPasswordHandler = () => setShowPass(!showPass);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        type={showPass ? type : 'text'}
        style={[styles.input, style]}
      />
      {icon && (
        <ShowPassword onPress={showPasswordHandler} showPass={showPass} />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    padding: 22,
    borderRadius: 20,
    fontSize: 12,
    lineHeight: 13.8,
  },
  inputContainer: {
    position: 'relative',
  },
});
