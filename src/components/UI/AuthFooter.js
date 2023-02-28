import {StyleSheet, View, Text} from 'react-native';

import Link from '../Buttons/Link';

const AuthFooter = ({onPress, text, title}) => {
  return (
    <View style={styles.footerContainer}>
      <Text>{text} </Text>
      <Link title={title} onPress={onPress} />
    </View>
  );
};

export default AuthFooter;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 34,
    flexDirection: 'row',
  },
});
