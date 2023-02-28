import {View, Text, StyleSheet} from 'react-native';
import {Directions} from 'react-native-gesture-handler';
import RegistrationFooter from '../../components/UI/RegistrationFooter';

import Personsvg from '../../assets/svg/Rectangle 1007.svg';
import Hammersvg from '../../assets/svg/Mask Group 185.svg';

import RegisterCard from '../../components/Cards/RegisterCard';

const UserType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ᲠᲔᲒᲘᲡᲢᲠᲐᲪᲘᲐ</Text>
          <Text style={styles.text}>მომხმარებლის ტიპი</Text>
        </View>
        <View style={styles.cardContainer}>
          <RegisterCard
            SVG={Personsvg}
            title="იურიდიული პირი"
            navigation={navigation}
          />
          <RegisterCard
            SVG={Hammersvg}
            title="ფიზიკური პირი"
            navigation={navigation}
          />
        </View>
      </View>
      <RegistrationFooter navigation={navigation} />
    </View>
  );
};

export default UserType;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 40},
  titleContainer: {alignItems: 'center'},
  title: {fontSize: 22},
  text: {fontSize: 13},
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15.5,
    marginTop: 22.5,
    justifyContent: 'center',
  },
});
