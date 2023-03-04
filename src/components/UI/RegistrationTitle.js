import {StyleSheet, View, Text} from 'react-native';

const RegistrationTitle = ({title}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={{fontSize: 20, color: '#000', fontWeight: 700}}>
        ᲠᲔᲒᲘᲡᲢᲠᲐᲪᲘᲐ
      </Text>
      <Text style={{fontSize: 11, color: '#000', fontWeight: 500}}>
        {title}
      </Text>
    </View>
  );
};

export default RegistrationTitle;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
});
