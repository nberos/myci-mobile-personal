import {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import Checkmark from '../../assets/svg/Icon ionic-ios-checkmark.svg';

const ConfirmButton = ({children, onPress, type}) => {
  const [showButton, setShowButton] = useState(false);

  const pressHandler = () => {
    setShowButton(!showButton);
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={pressHandler}>
        <View style={[styles.checkbox, showButton && styles.checked]}>
          <Checkmark width={9} height={7} />
        </View>
      </Pressable>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: 8,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 0.5,
    borderColor: 'rgba(198, 198, 198, 1)',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: 'rgba(198, 198, 198, 1)',
  },
});

export default ConfirmButton;
