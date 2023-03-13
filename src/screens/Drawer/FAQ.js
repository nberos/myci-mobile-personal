import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const FAQ = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {}, []);

  return (
    <View>
      <View
        style={{
          padding: 15,
          borderWidth: 1,
        }}>
        <Text>ძირითადი შეკითხვები</Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default FAQ;
