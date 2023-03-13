import {Pressable, View} from 'react-native';
import Burger1 from '../../assets/svg/burger.svg';
import {useContext} from 'react';
import {MainContext} from '../../Context/MainContext';

const DrawerButton = ({onPress}) => {
  const {showDrawer, setShowDrawer} = useContext(MainContext);

  const onDrawerClickHandler = () => setShowDrawer(true);

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 32,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Burger1 width={18} height={8} />
      </View>
    </Pressable>
  );
};

export default DrawerButton;
