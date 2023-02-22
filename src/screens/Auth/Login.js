import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View></View>
        <View></View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
