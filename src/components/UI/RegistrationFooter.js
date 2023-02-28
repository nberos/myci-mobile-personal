import {View, Text, StyleSheet} from 'react-native';
import GoBack from '../Buttons/GoBack';
import RegistrationFooterSteps from './RegistrationFooterSteps';

const RegistrationFooter = ({navigation}) => {
  return (
    <View style={styles.container}>
      <GoBack navigation={navigation} />
      <RegistrationFooterSteps />
    </View>
  );
};

export default RegistrationFooter;

const styles = StyleSheet.create({
  container: {
    height: 78,
    backgroundColor: '#f4f4f4',
    padding: 13,
  },
});
