import {LandingProducts} from '../../../services/NetworkManager';
import * as types from './drawer.actionTypes';

export const setServicePerson = data => {
  return async dispatch => {
    try {
      const response = await LandingProducts('PERSON', 'KA');
      dispatch({type: types.SET_SERVICE_DATA_PERSON, payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };
};

export const setServiceCompany = data => {
  return async dispatch => {
    try {
      const response = await LandingProducts('COMPANY', 'KA');
      dispatch({type: types.SET_SERVICE_DATA_COMPANY, payload: response.data});
    } catch (error) {
      console.log(error);
    }
  };
};
