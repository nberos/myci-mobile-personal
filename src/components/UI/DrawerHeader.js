import {View, Text, StyleSheet, Pressable} from 'react-native';

import Arrow from '../../assets/svg/arrow-back.svg';

const DrawerHeader = ({navigation, title}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Arrow width={40} height={15} />
      </Pressable>
      <Text style={{color: '#000', fontSize: 12, fontWeight: 700}}>
        {title}
      </Text>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(250, 250, 252, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
});
