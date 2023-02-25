import * as types from './auth.actionTypes';

export const setToken = token => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_TOKEN, token: token});
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const removeToken = () => {
  return async dispatch => {
    try {
      dispatch({type: types.REMOVE_TOKEN});
    } catch (error) {
      throw new Error(error);
    }
  };
};
