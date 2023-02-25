import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'react-native';
import Button from '../../components/Buttons/Button';
import {removeToken} from '../../redux/reducers/auth/auth.actions';

const Main = ({navigation}) => {
  const logoutHandler = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    removeToken();
  };

  return (
    <View>
      <Button title="Log out" onPress={logoutHandler} />
    </View>
  );
};

export default Main;
