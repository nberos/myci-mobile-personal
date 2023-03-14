import {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import DropDownQuestion from './DropDownQuestion';

const DropDown = ({
  getCategoryHandler,
  item,
  showDropdown,
  dropdownData,
  getItemTextHandler,
  id,
  exactId,
  showItem,
  itemText,
  nestedId,
}) => {
  return (
    <>
      <View>
        <Pressable
          onPress={() => {
            getCategoryHandler(item.id);
          }}
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
      </View>
      <DropDownQuestion
        showDropdown={showDropdown}
        dropdownData={dropdownData}
        exactId={exactId}
        id={id}
        showItem={showItem}
        itemText={itemText}
        getItemTextHandler={getItemTextHandler}
        nestedId={nestedId}
      />
    </>
  );
};

export default DropDown;
