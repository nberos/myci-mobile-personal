import {StyleSheet, View, Text} from 'react-native';

import RegistrationTitle from '../../components/UI/RegistrationTitle';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import Button from '../../components/Buttons/Button';
import {ScrollView} from 'react-native-gesture-handler';
import ConfirmButton from '../../components/Buttons/ConfirmButton';

const Conditions = ({navigation}) => {
  return (
    <View>
      <RegistrationTitle title="პირობები" />
      <View style={styles.bodyContainer}>
        <View style={styles.conditionsContainer}>
          <ScrollView>
            <Text style={styles.conditionsText}>
              კომპანიაშესაძლებლობასაძლევს
              მომხმარებელსისარგებლოსკომპანიისსერვისით - „ჩემიკრედიტინფო“,
              რისსაფუძველზეც მომხმარებელსენიჭებაუფლებაგაეცნოს
              კომპანიისმონაცემთაბაზაშიმისშესახებ
              არსებულინფორმაციასინტერნეტისმეშვეობით კომპანიაშესაძლებლობასაძლევს
              მომხმარებელსისარგებლოსკომპანიისსერვისით - „ჩემიკრედიტინფო“,
              რისსაფუძველზეც მომხმარებელსენიჭებაუფლებაგაეცნოს
              კომპანიისმონაცემთაბაზაშიმისშესახებ
              არსებულინფორმაციასინტერნეტისმეშვეობითკომპანიაშესაძლებლობასაძლევს
              მომხმარებელსისარგებლოსკომპანიისსერვისით - „ჩემიკრედიტინფო“,
              რისსაფუძველზეც მომხმარებელსენიჭებაუფლებაგაეცნოს
              კომპანიისმონაცემთაბაზაშიმისშესახებ
              არსებულინფორმაციასინტერნეტისმეშვეობით კომპანიაშესაძლებლობასაძლევს
              მომხმარებელსისარგებლოსკომპანიისსერვისით - „ჩემიკრედიტინფო“,
              რისსაფუძველზეც მომხმარებელსენიჭებაუფლებაგაეცნოს
              კომპანიისმონაცემთაბაზაშიმისშესახებ
              არსებულინფორმაციასინტერნეტისმეშვეობით
            </Text>
          </ScrollView>
        </View>
        <View style={styles.btnContainer}>
          <ConfirmButton
            text="ვადასტურებ, რომ გავეცანი და ვეთანხმები წესებს და პირობებს."
            type="required"
          />
          <ConfirmButton
            text="ვადასტურებ, რომ გავეცანი და ვეთანხმები სარეკლამო პირობებს (არასავალდებულო)"
            type="optional"
          />
        </View>
        <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" />
      </View>
      <RegistrationFooter navigation={navigation} />
    </View>
  );
};

export default Conditions;

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 12,
  },
  conditionsContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    borderRadius: 12,
    height: 190,
    backgroundColor: 'rgba(0,0,0,0.02)',
    padding: 8,
  },
  conditionsText: {
    fontSize: 10,
  },
  btnContainer: {
    marginVertical: 8,
    rowGap: 8,
  },
});
