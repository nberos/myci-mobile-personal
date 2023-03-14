import {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import DrawerHeader from '../../components/UI/DrawerHeader';
import {LandingFAQ, LandingFAQCategories} from '../../services/NetworkManager';

const FAQ = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await LandingFAQ('KA');

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fn();
  }, []);

  const getCategoryHandler = async id => {
    if (isData) {
      setShowDropdown(!showDropdown);
    } else {
      try {
        const response = await LandingFAQCategories('KA', id);
        setDropdownData(response.data);
        setShowDropdown(true);
        setIsData(true);
        console.log('fetched');
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  return (
    <View>
      <DrawerHeader navigation={navigation} title="ᲮᲨᲘᲠᲐᲓ ᲓᲐᲡᲛᲣᲚᲘ ᲙᲘᲗᲮᲕᲔᲑᲘ" />
      <View style={{paddingHorizontal: 12}}>
        <ScrollView>
          {data?.map(item => (
            <Pressable
              key={item.id}
              onPress={() => getCategoryHandler(item.id)}
              style={{
                backgroundColor: 'rgba(215, 25, 33, 0.4)',
                padding: 18,
                borderRadius: 18,
                marginVertical: 8,
              }}>
              <Text style={{color: 'rgba(198, 43, 39, 1)', fontSize: 12}}>
                {item.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      {showDropdown &&
        dropdownData?.map(item => (
          <View key={item.id}>
            <Text>{item.question}</Text>
          </View>
        ))}
    </View>
  );
};

export default FAQ;
