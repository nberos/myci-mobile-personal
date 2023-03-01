import * as types from './forgotpassword.actionTypes';

export const setUserName = username => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_USERNAME, username: username});
    } catch (error) {
      console.log(error);
    }
  };
};

export const setDuration = value => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_OTP_DURATION, seconds: value});
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCodeCell = value => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_CODECELL_VALUE, code: value});
    } catch (error) {
      console.log(error);
    }
  };
};
