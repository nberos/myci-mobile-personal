import {StyleSheet, View, Text, Pressable} from 'react-native';

const RegisterCard = ({SVG, title, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Contacts')}>
      <View style={styles.card}>
        <View style={styles.svgContainer}>
          <SVG width={24} heigth={21} />
        </View>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default RegisterCard;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 30.5,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    rowGap: 31,
    width: '45%',
  },
  svgContainer: {
    padding: 9,
    backgroundColor: 'rgba(0, 0,0,0.05)',
    borderRadius: 17,
  },
  cardText: {
    fontSize: 14,
  },
});
