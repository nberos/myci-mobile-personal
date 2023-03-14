import {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import ServiceContextProvider, {
  ServiceContext,
} from '../../Context/ServiceContext';
import {
  setServiceCompany,
  setServiceData,
  setServicePerson,
} from '../../redux/reducers/drawer/drawer.actions';

import {LandingProducts} from '../../services/NetworkManager';

const Service = ({type, children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await LandingProducts(type, 'KA');

        if (response.status === 200) {
          if (type === 'PERSON') {
            dispatch(setServicePerson(response));
          }

          if (type === 'COMPANY') {
            dispatch(setServiceCompany(response));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, []);

  return <View>{children}</View>;
};

export default Service;
