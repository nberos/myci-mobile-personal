import {StyleSheet, View, Text, Animated} from 'react-native';
import {useState} from 'react';

import RegistrationTitle from '../../components/UI/RegistrationTitle';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import Button from '../../components/Buttons/Button';
import {ScrollView} from 'react-native-gesture-handler';
import ConfirmButton from '../../components/Buttons/ConfirmButton';
import Link from '../../components/Buttons/Link';
import BottomSheetModal from '../../components/Modals/BottomSheetModal';

const Conditions = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  const additionalLink = (
    <Link
      style={{fontSize: 8}}
      title="სარეკლამო პირობებს"
      onPress={() => setShowModal(!showModal)}
    />
  );

  return (
    <View style={{flex: 1, position: 'relative'}}>
      {showModal ? (
        <BottomSheetModal show={showModal} setShow={setShowModal} />
      ) : (
        <>
          <RegistrationTitle title="პირობები" />
          <View style={styles.bodyContainer}>
            <View style={styles.conditionsContainer}>
              <ScrollView>
                <Text style={styles.conditionsText}></Text>
              </ScrollView>
            </View>
            <View style={styles.btnContainer}>
              <ConfirmButton>
                {'ვადასტურებ, რომ გავეცანი და ვეთანხმები წესებს და პირობებს.'}
              </ConfirmButton>
              <ConfirmButton>
                {`ვადასტურებ, რომ გავეცანი და ვეთანხმები `}
                {additionalLink}
                {` (არასავალდებულო)`}
              </ConfirmButton>
            </View>
            <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" />
          </View>
          <RegistrationFooter navigation={navigation} />
        </>
      )}
    </View>
  );
};

export default Conditions;

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 12,
  },
  conditionsContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    borderRadius: 12,
    height: 190,
    backgroundColor: 'rgba(0,0,0,0.02)',
    padding: 8,
  },
  conditionsText: {
    fontSize: 10,
  },
  btnContainer: {
    marginVertical: 8,
    rowGap: 8,
  },
});
