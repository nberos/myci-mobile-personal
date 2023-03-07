// App.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Switch} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import {useSelector} from 'react-redux';
import {selectCountriesData} from '../../redux/reducers/registration/registration.selectors';
import Input from './Input';

const Dropdown = ({placeholder, value, setValue}) => {
  const countries = useSelector(state => state);
  const data = countries?.registration?.countiesData?.data;

  const handleOptionChange = option => {
    setValue(option.name);
  };

  return (
    <ModalSelector
      data={data}
      onChange={handleOptionChange}
      keyExtractor={item => item.id}
      labelExtractor={item => item.name}>
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
