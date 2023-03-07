// App.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Switch} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import Input from './Input';

let index = 0;
const data = [
  {key: index++, section: true, label: 'Fruits'},
  {key: index++, label: 'Red Apples'},
  {key: index++, label: 'Cherries'},
  {
    key: index++,
    label: 'Cranberries',
    accessibilityLabel: 'Tap here for cranberries',
  },
  {key: index++, label: 'Vegetable', customKey: 'Not a fruit'},
];

const Dropdown = ({placeholder, value, setValue, data}) => {
  const handleOptionChange = option => {
    console.log(option);
    // setValue(option.label);
  };

  return (
    <ModalSelector data={data} onChange={handleOptionChange}>
      <Input
        placeholder={!value ? placeholder : value}
        value={value}
        editable={false}
      />
    </ModalSelector>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
