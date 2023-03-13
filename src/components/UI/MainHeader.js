import {View, Text, StyleSheet} from 'react-native';

import DrawerButton from '../../components/Buttons/DrawerButton';
import HLogo from '../../assets/svg/logo blc.svg';

const MainHeader = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <HLogo width={165} height={40} />
      <DrawerButton
        navigation={navigation}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 10,
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
