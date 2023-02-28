import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const ForgotPasswordCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View
          style={{
            backgroundColor: '#C62B27',
            width: 120,
            height: 12,
            borderRadius: 8,
          }}></View>
      </View>
      <Text style={styles.title}>შეიყვანეთ დასტურის კოდი</Text>
      <View style={styles.code}></View>
      <Pressable>
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
    width: 250,
    height: 12,
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
