import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = async tokens => {
  const {accessToken, refreshToken} = tokens;
  await AsyncStorage.setItem('refreshToken', refreshToken);
  await AsyncStorage.setItem('accessToken', accessToken);
};

export const getTokens = async () => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  const refreshToken = await AsyncStorage.getItem('refreshToken');

  return {
    accessToken,
    refreshToken,
  };
};

export const removeTokens = async () => {
  await AsyncStorage.removeItem('accessToken');
  await AsyncStorage.removeItem('refreshToken');
};
