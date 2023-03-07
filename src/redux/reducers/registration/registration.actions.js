import {GetCountries} from '../../../services/NetworkManager';
import * as types from './registration.actionTypes';

export const setRegisterData = data => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_REGISTER_DATA, payload: data});
    } catch (error) {
      console.log(error);
    }
  };
};

export const setExtraData = data => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_EXTRA_DATA, payload: data});
    } catch (error) {
      console.log(error);
    }
  };
};

export const setOtpData = code => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_OTP_CODE, payload: code});
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCountriesData = access_token => {
  return async dispatch => {
    dispatch({type: types.FETCH_COUNTRIES_REQUEST});
    try {
      const response = await GetCountries(access_token);
      dispatch({type: types.FETCH_COUNTRIES_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: types.FETCH_COUNTRIES_FAILURE, error: error.message});
    }
  };
};
