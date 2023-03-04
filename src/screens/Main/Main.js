import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Buttons/Button';
import {removeToken} from '../../redux/reducers/auth/auth.actions';
import {selectAuth} from '../../redux/reducers/auth/auth.selectors';
import {ReauthorizeCustomer} from '../../services/NetworkManager';
import {removeTokens} from '../../utils/storage';

const Main = ({navigation}) => {
  const tokens = useSelector(selectAuth);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const logoutHandler = async () => {
    try {
      await removeTokens();
      dispatch(removeToken());
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <View>
      <Button title="Log out" onPress={logoutHandler} />
    </View>
  );
};

export default Main;
