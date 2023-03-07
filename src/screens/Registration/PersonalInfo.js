import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';

const PersonalInfo = ({navigation, route}) => {
  const [id, setId] = useState('11111111111');
  const [repeatId, setRepeatId] = useState('11111111111');
  const [firstName, setFirstName] = useState('nika');
  const [lastName, setLastName] = useState('nika');

  const {customerType} = route.params;

  const navigateToNextHandler = () => {
    navigation.navigate('Password', {
      customerType: customerType,
      userName: id,
      firstName: firstName,
      lastName: lastName,
    });
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
