import * as types from './drawer.actionTypes';

export const setServiceData = data => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_SERVICE_DATA, payload: data});
    } catch (error) {
      console.log(error);
    }
  };
};
