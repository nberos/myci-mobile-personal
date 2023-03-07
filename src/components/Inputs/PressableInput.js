import {Pressable, View, Text} from 'react-native';

import Input from './Input';

const PressableInput = ({placeholder, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          borderWidth: 1,
          paddingHorizontal: 18,
          paddingVertical: 16,
          borderRadius: 20,
          borderColor: 'rgba(0,0,0,0.1)',
        }}>
        <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.7)'}}>
          {placeholder}
        </Text>
      </View>
    </Pressable>
  );
};

export default PressableInput;
