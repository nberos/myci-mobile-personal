import {StyleSheet, View, Text} from 'react-native';

const Link = ({title, style}) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#0076FF',
  },
});
