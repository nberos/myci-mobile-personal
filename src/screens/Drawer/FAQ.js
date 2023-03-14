import {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import Collapsible from 'react-native-collapsible/Accordion';
import DropDown from '../../components/DropDown/DropDown';

import DrawerHeader from '../../components/UI/DrawerHeader';
import {LandingFAQ, LandingFAQCategories} from '../../services/NetworkManager';

const FAQ = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [itemText, setItemText] = useState('');
  const [itemId, setItemId] = useState();
  const [nestedId, setNestedId] = useState();

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
      setItemId(id);
      console.log('fetched');
    } catch (error) {
      console.log('error', error);
    }
  };

  const getItemTextHandler = id => {
    const item = dropdownData.find(item => item.id === id);
    setItemText(item?.answer);
    setShowItem(!showItem);
    setNestedId(item.id);
  };

  return (
    <View style={{paddingBottom: 12}}>
      <ScrollView>
        <DrawerHeader navigation={navigation} title="ᲮᲨᲘᲠᲐᲓ ᲓᲐᲡᲛᲣᲚᲘ ᲙᲘᲗᲮᲕᲔᲑᲘ" />
        <View style={{paddingHorizontal: 12}}>
          <ScrollView>
            {data?.map(item => (
              <DropDown
                getCategoryHandler={getCategoryHandler}
                item={item}
                key={item.id}
                id={item.id}
                exactId={itemId}
                dropdownData={dropdownData}
                getItemTextHandler={getItemTextHandler}
                showDropdown={showDropdown}
                itemText={itemText}
                showItem={showItem}
                nestedId={nestedId}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQ;
