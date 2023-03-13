import {useContext} from 'react';
import {Text, View} from 'react-native';
import {ServiceContext} from '../../Context/ServiceContext';
import ServiceProvider from '../Drawer/Service';

const PersonTab = () => {
  return (
    <ServiceProvider type="PERSON">
      <View>
        <Text>123</Text>
      </View>
    </ServiceProvider>
  );
};

export default PersonTab;
