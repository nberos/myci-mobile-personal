import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    borderRadius: 20,
    backgroundColor: 'rgba(196, 44, 39, 0.25)',
    // opacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {color: 'rgb(196, 44, 39)'},
});
