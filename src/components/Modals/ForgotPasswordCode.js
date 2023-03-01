import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import {SendOTP} from '../../services/NetworkManager';

import CodeCells from '../UI/CodeCells';
import {useDispatch, useSelector} from 'react-redux';
import {selectForgotpassword} from '../../redux/reducers/forgotpassword/forgotpassword.selectors';
import {setCodeCell} from '../../redux/reducers/forgotpassword/forgotpassword.actions';

const ForgotPasswordCode = () => {
  const [progress, setProgress] = useState(1);
  const [value, setValue] = useState('');
  const {username, seconds, code} = useSelector(selectForgotpassword);
  const dispatch = useDispatch();

  const btnDisableCondition = progress > seconds - 1;

  const sendNewOtp = async () => {
    const response = await SendOTP(username);
  };

  useEffect(() => {
    dispatch(setCodeCell(value));
  }, [value]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < seconds + 1) {
        setProgress(progress + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress, seconds]);

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View
          style={{
            backgroundColor: '#C62B27',
            width: 120,
            height: 10,
            borderRadius: 8,
            width: 4.16 * progress,
            alignSelf: 'flex-start',
          }}></View>
      </View>
      <Text style={styles.title}>შეიყვანეთ დასტურის კოდი</Text>
      {/* <View style={styles.code}> */}
      <CodeCells value={value} setValue={setValue} />
      {/* </View> */}
      <Pressable
        disabled={btnDisableCondition ? false : true}
        onPress={sendNewOtp}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>ხელახლა გამოგზავნა</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ForgotPasswordCode;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  progress: {
    backgroundColor: '#f4f4f4',
    height: 10,
    borderRadius: 8,
    marginBottom: 4,
  },
  title: {fontSize: 12, color: '#000', textAlign: 'center'},
  code: {},
  button: {
    paddingVertical: 14,
    backgroundColor: '#f4f4f4',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    elevation: 0.5,
    marginTop: 8,
  },
  buttonTitle: {fontSize: 12, color: '#000'},
});
