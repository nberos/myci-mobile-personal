import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Text, Pressable} from 'react-native';

import Arrow from '../../assets/svg/Icon ionic-ios-arrow-back.svg';

const GoBack = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Arrow width={8.5} height={8.5} />
        <Text style={styles.title}>უკან დაბრუნება</Text>
      </View>
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 7.5,
  },
  title: {
    fontSize: 12,
  },
});
