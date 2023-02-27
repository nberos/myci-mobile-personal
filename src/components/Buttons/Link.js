import {StyleSheet, View, Text, Pressable} from 'react-native';

const Link = ({title, style, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text style={[styles.title, style]}>{title}</Text>
      </View>
    </Pressable>
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
