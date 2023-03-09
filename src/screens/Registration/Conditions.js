import {StyleSheet, View, Text, Animated} from 'react-native';
import {useEffect, useState} from 'react';
import {RenderHTML} from 'react-native-render-html';

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
        // const {accessToken} = await getTokens();
        const accessToken =
          'eyJhbGciOiJSUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5V1JEVE5hUGhzYTBGaE5yR1ltT1k3UU1jSU40amhGa21sTHU0ZDR2cHA0In0.eyJleHAiOjE2NzgzNTYxODIsImlhdCI6MTY3ODM1NTg4MiwianRpIjoiZmY1M2M0N2YtNjZkNS00MTA1LTk4ZWItNThiMzU4OWU1YzgzIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMjUuODk6ODA4MC9hdXRoL3JlYWxtcy9kZW1vIiwic3ViIjoiZmFhODM0ODQtN2MxNC00MzM3LTk4YjctNTQxYzg3OTFmMGYxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWNyZWRpdGluZm8tZGVtbyIsInNlc3Npb25fc3RhdGUiOiIyY2QwMDdhNS0xYWYxLTQ2MmYtYjE4Ny1iMmU4ZDJhYTYzMmUiLCJhY3IiOiIxIiwic2NvcGUiOiIiLCJjdXN0b21lckFjdGlvbnMiOlsiZnJvbnRfbWVtYmVyIiwidHdvX2ZhY3Rvcl9hdXRoX2VuYWJsZV9kaXNhYmxlIiwicHJvZmlsZV9lZGl0IiwicHJvZmlsZV92aWV3Il0sInByb2R1Y3RJZCI6MSwicmVxdWlyZWRNb2JpbGVOdW1iZXJWZXJpZmljYXRpb24iOmZhbHNlLCJzZXNzaW9uIjoiMmNkMDA3YTUtMWFmMS00NjJmLWIxODctYjJlOGQyYWE2MzJlIiwicmVxdWlyZXNXYWxrdGhyb3VnaCI6ZmFsc2UsImNvbXBhbmllcyI6IltdIiwiY3VzdG9tZXJUeXBlIjoiUEVSU09OIiwidHdvRmFjdG9yQXV0aCI6ZmFsc2UsInBhc3N3b3JkUmVzZXQiOmZhbHNlLCJyZXF1aXJlc1dlbGNvbWVQb3B1cCI6ZmFsc2UsInJlcXVpcmVzQWdyZWVtZW50QWNjZXB0IjpmYWxzZSwiY3VzdG9tZXIiOjc3ODQsInN0YXR1cyI6IlJFR0lTVEVSRUQifQ.m4DeYHweayxkI-a38ZJ7HdGOLfkzLYeZicNteabIP-A0W2AcilMhTi96V2T2Pca3PMq8mf6GTnZ-ZndYHS2tWKzYkTyVDJvRn8uA7vL1EGDLvZwLnqxooTqgBQIxKhETiwrop78y9OE3Wx_EZ6G4S3ixjfRbflsdCYOGNsm_e8Dbqb-uOrfkeS18agQ1S3pwKkfaROf3Aykv6LnedrxwU7oC17L6DW4hUf-y_dsmHyh4Y7ylerCXOZmY-M11HOdlrIyrNUeL4qfnRYQ7GNhXtIabUWwEl7o-MZgeZr6BbfbYbRel4s-1FzZAuLEvHIGh235YpQ3mCYi8XOCMNUzebA';
        const res = await GetUserAgreement(accessToken);

        if (res.status === 200) {
          setUAText(res.data.agreement);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fn();
  }, []);

  const onFinishHandler = async () => {
    try {
      const {accessToken} = await getTokens();
      await AcceptUserAgreement(accessToken);
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
            <Button title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ" onPress={onFinishHandler} />
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
