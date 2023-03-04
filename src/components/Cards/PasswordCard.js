import {StyleSheet, View, Text} from 'react-native';

import InfoIcon from '../../assets/svg/Icon material-info-outline.svg';

const PasswordCard = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconContainer}>
        <InfoIcon width={14} height={14} />
      </View>
      <View style={{}}>
        <Text style={styles.text1}>
          ძლიერი პაროლი უნდა იყოს რთულად გამოსაცნობი.
        </Text>
        <Text style={styles.text2}>
          გამოიყენეთ ძნელად მისახვედრი და გამოსაცნობი სიტყვები, ფრაზები,
          სიმბოლოები და რიცხვები, არასტანდართული uPPercasing-ი.
        </Text>
      </View>
    </View>
  );
};

export default PasswordCard;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'rgba(111, 133, 226, 0.1)',
    columnGap: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    marginTop: 18,
  },
  iconContainer: {
    backgroundColor: 'rgba(23, 23, 23, 0.2)',
    padding: 5,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  text1: {
    fontSize: 12,
    color: '#000',
    fontWeight: 500,
    flexWrap: 'wrap',
  },
  text2: {
    fontSize: 10,
    color: '#000',
    fontWeight: 400,
    flexWrap: 'wrap',
    width: 250,
  },
});
