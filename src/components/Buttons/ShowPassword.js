import {Pressable, StyleSheet, View} from 'react-native';

import EyeSplash from '../../assets/svg/Icon awesome-eye-slash.svg';
import Eye from '../../assets/svg/Icon awesome-eye.svg';

const ShowPassword = ({onPress, showPass}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.eyeContainer}>
        {showPass ? (
          <EyeSplash width={16} height={13} />
        ) : (
          <Eye width={17} height={11} />
        )}
      </View>
    </Pressable>
  );
};

export default ShowPassword;

const styles = StyleSheet.create({
  eyeContainer: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    width: 31,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});
