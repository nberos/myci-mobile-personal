import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';

const PersonalInfo = ({navigation}) => {
  const [id, setId] = useState('');
  const [repeatId, setRepeatId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigateToNextHandler = () => {
    navigation.navigate('Password');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <RegistrationTitle title="პირადი ინფორმაცია" />
        <View style={styles.formContainer}>
          <Input placeholder="პირადი ნომერი" value={id} setValue={setId} />
          <Input
            placeholder="გაიმეორეთ პირადი ნომერი"
            value={repeatId}
            setValue={setRepeatId}
          />
          <Input
            placeholder="სახელი"
            value={firstName}
            setValue={setFirstName}
          />
          <Input placeholder="გვარი" value={lastName} setValue={setLastName} />
          <Button title="გაგრძელება" onPress={navigateToNextHandler} />
        </View>
        <RegistrationFooter navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
    rowGap: 8,
    marginBottom: 24,
  },
});
