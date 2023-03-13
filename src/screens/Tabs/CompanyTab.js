import {Text, View} from 'react-native';
import ServiceProvider from '../Drawer/Service';

const ComapanyTab = () => {
  return (
    <ServiceProvider type="COMPANY">
      <View>
        <Text>123</Text>
      </View>
    </ServiceProvider>
  );
};

export default ComapanyTab;
