import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Auth from './Auth/Auth';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <Auth />
    </NavigationContainer>
  );
};

export default Navigation;
