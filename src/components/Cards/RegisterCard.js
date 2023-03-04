import {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const RegisterCard = ({
  SVG,
  title,
  navigation,
  onPress,
  active,
  customerType,
}) => {
  const activeCard = active === customerType;

  return (
    <Pressable onPress={() => onPress(customerType)}>
      <View style={[styles.card, activeCard && styles.bgGreen]}>
        <View
          style={{
            padding: 9,
            backgroundColor: activeCard ? '#4CDE84' : '#f4f4f4',
            borderRadius: 16,
          }}>
          <SVG width={20} height={20} fill={activeCard && '#4cde84'} />
        </View>
        <Text style={[styles.cardTitle, activeCard && styles.titleGreen]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default RegisterCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 137,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
  },
  cardTitle: {fontSize: 11, marginTop: 31},
  bgGreen: {backgroundColor: '#4CDE841A', borderColor: '#4cde84'},
  titleGreen: {color: '#4CDE84'},
});
