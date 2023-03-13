import {StyleSheet, View, Text, Animated} from 'react-native';
import {useEffect, useState} from 'react';
import {RenderHTML} from 'react-native-render-html';
import axios from 'axios';

import RegistrationTitle from '../../components/UI/RegistrationTitle';
import RegistrationFooter from '../../components/UI/RegistrationFooter';
import Button from '../../components/Buttons/Button';
import {ScrollView} from 'react-native-gesture-handler';
import ConfirmButton from '../../components/Buttons/ConfirmButton';
import Link from '../../components/Buttons/Link';
import BottomSheetModal from '../../components/Modals/BottomSheetModal';
import {
  AcceptUserAgreement,
  GetUserAgreement,
} from '../../services/NetworkManager';
import {getTokens} from '../../utils/storage';
import MainHeader from '../../components/UI/MainHeader';

const Conditions = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [uAText, setUAText] = useState();
  // console.log(uAText);
  const additionalLink = (
    <Link
      style={{fontSize: 8}}
      title="სარეკლამო პირობებს"
      onPress={() => setShowModal(!showModal)}
    />
  );

  useEffect(() => {
    const fn = async () => {
      try {
        const {accessToken} = await getTokens();
        const res = await GetUserAgreement(accessToken);
        if (res.status === 200) {
          setUAText(res.data.agreement);
        }
      } catch (error) {
        // console.log(error);
      }
    };

    fn();
  }, [uAText]);

  const onFinishHandler = async () => {
    try {
      const {accessToken} = await getTokens();
      const response = await AcceptUserAgreement(accessToken);
      console.log(response);
      console.log('click');
      if (response.status === 200) {
        navigation.navigate('Confirmation');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      {showModal ? (
        <BottomSheetModal
          show={showModal}
          setShow={setShowModal}
          content={uAText}
        />
      ) : (
        <>
          <MainHeader />
          <RegistrationTitle title="პირობები" />
          <View style={styles.bodyContainer}>
            <View style={styles.conditionsContainer}>
              <ScrollView>
                <RenderHTML
                  source={{
                    html: uAText,
                  }}
                  ignoredStyles={['fontWeight', 'fontFamily']}
                  tagsStyles={{
                    p: {marginBottom: -10, color: '#000'},
                    u: {textDecorationStyle: undefined},
                    ul: {
                      color: '#000',
                    },
                  }}
                  contentWidth={100}
                />
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
            <Button title="gagrdzeleba" onPress={onFinishHandler} />
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
