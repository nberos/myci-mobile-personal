import {useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';

import ShowPassword from '../Buttons/ShowPassword';

const Input = ({placeholder, style, icon, value, setValue, editable}) => {
  const [showPass, setShowPass] = useState(true);

  const showPasswordHandler = () => setShowPass(!showPass);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, style]}
        value={value}
        onChangeText={val => setValue(val)}
        autoCapitalize="none"
        secureTextEntry={icon}
        editable={editable}
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
    paddingHorizontal: 18,
    borderRadius: 20,
    fontSize: 12,
    lineHeight: 13.8,
  },
  inputContainer: {
    position: 'relative',
  },
});
