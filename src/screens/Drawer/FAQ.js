import {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import Collapsible from 'react-native-collapsible/Accordion';

import DrawerHeader from '../../components/UI/DrawerHeader';
import {LandingFAQ, LandingFAQCategories} from '../../services/NetworkManager';

const FAQ = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [itemText, setItemText] = useState('');

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
    try {
      const response = await LandingFAQCategories('KA', id);
      setDropdownData(response.data);
      setShowDropdown(!showDropdown);
      setIsData(true);
      console.log('fetched');
    } catch (error) {
      console.log('error', error);
    }
  };

  const getItemTextHandler = id => {
    const item = dropdownData.find(item => item.id === id);
    setItemText(item?.answer);
    setShowItem(!showItem);
  };

  return (
    <View style={{paddingBottom: 12}}>
      <ScrollView>
        <DrawerHeader navigation={navigation} title="ᲮᲨᲘᲠᲐᲓ ᲓᲐᲡᲛᲣᲚᲘ ᲙᲘᲗᲮᲕᲔᲑᲘ" />
        <View style={{paddingHorizontal: 12}}>
          <ScrollView>
            {data?.map(item => (
              <Pressable
                key={item.id}
                onPress={() => getCategoryHandler(item.id)}
                style={{
                  backgroundColor: 'rgba(215, 25, 33, 0.3)',
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
        <View style={{rowGap: 10}}>
          {showDropdown &&
            dropdownData?.map(item => (
              <View
                key={item.id}
                style={{width: '85%', alignSelf: 'flex-end', marginRight: 12}}>
                <Pressable onPress={() => getItemTextHandler(item.id)}>
                  <View
                    style={{
                      backgroundColor: 'rgba(229, 229, 229, 1)',
                      padding: 12,
                      borderRadius: 18,
                    }}>
                    <Text>{item.question}</Text>
                  </View>
                </Pressable>
              </View>
            ))}
          {showItem && (
            <View
              style={{
                width: '85%',
                alignSelf: 'flex-end',
                marginRight: 12,
                marginTop: -24,
                backgroundColor: 'rgba(229, 229, 229, 0.4)',
                padding: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text>{itemText}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQ;
