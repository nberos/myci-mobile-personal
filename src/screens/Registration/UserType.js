import {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Button from '../../components/Buttons/Button';

import LeftLogo from '../../assets/svg/Rectangle 1007.svg';
import RightLogo from '../../assets/svg/Mask Group 185.svg';
import RegisterCard from '../../components/Cards/RegisterCard';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import RegistrationTitle from '../../components/UI/RegistrationTitle';

const UserType = ({navigation}) => {
  const [showButton, setShowButton] = useState(false);
  const [activeCard, setActiveCard] = useState('');

  const navigateToNextHandler = () => navigation.navigate('PersonalInfo');

  const cardPressHandler = val => {
    setShowButton(true);
    setActiveCard(val);
  };

  return (
    <View style={styles.rootContainer}>
      <RegistrationTitle title="მომხმარებლის ტიპი" />
      <View style={styles.cardContainer}>
        <RegisterCard
          title="იურიდიული პირი"
          SVG={LeftLogo}
          navigation={navigation}
          onPress={cardPressHandler}
          customerType="COMPANY"
          active={activeCard}
        />
        <RegisterCard
          title="ფიზიკური პირი"
          SVG={RightLogo}
          navigation={navigation}
          onPress={cardPressHandler}
          customerType="PERSON"
          active={activeCard}
        />
      </View>
      {showButton && (
        <Button
          title="გაგრძელება"
          onPress={navigateToNextHandler}
          addStyles={{marginBottom: 32, marginHorizontal: 10}}
        />
      )}
      <RegistrationFooter navigation={navigation} />
    </View>
  );
};

export default UserType;

const styles = StyleSheet.create({
  rootContainer: {flex: 1},
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    columnGap: 6,
  },
});
