import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useState} from 'react';

import RegisterCard from '../../components/Cards/RegisterCard';
import Phonesvg from '../../assets/svg/phone.svg';
import Emailsvg from '../../assets/svg/email.svg';
import RegistrationTitle from '../../components/UI/RegistrationTitle';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import ForgotPasswordCode from '../../components/Modals/ForgotPasswordCode';

const Confirmation = ({navigation}) => {
  const [activeCard, setActiveCard] = useState('');
  const [showCode, setShowCode] = useState(false);

  const onCardPressHandler = val => {
    setActiveCard(val);
  };

  const onSendHandler = () => {
    setShowCode(!showCode);
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <RegistrationTitle title="აირჩიეთ დადასტურების მეთოდი" />
        <View style={[styles.cardContainer]}>
          <RegisterCard
            title="ტელეფონი"
            SVG={Phonesvg}
            onPress={onCardPressHandler}
            active={activeCard}
            customerType="PHONE"
          />
          <RegisterCard
            title="ელ.ფოსტა"
            SVG={Emailsvg}
            onPress={onCardPressHandler}
            active={activeCard}
            customerType="EMAIL"
          />
        </View>
        <View style={[styles.bodyContainer, !activeCard && styles.bodyMargin]}>
          {activeCard && (
            <Input
              placeholder={
                activeCard === 'PHONE' ? 'ტელეფონის ნომერი' : 'ელ.ფოსტა'
              }
            />
          )}
          {showCode && <ForgotPasswordCode />}
          <Button title="ᲒᲐᲒᲖᲐᲕᲜᲐ" onPress={onSendHandler} />
        </View>
        <RegistrationFooter navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  rootContainer: {justifyContent: 'center'},
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 10,
  },
  bodyContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
    gap: 10,
    marginBottom: 96,
  },
  bodyMargin: {
    marginBottom: 155,
  },
});
