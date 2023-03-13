import * as types from './drawer.actionTypes';

const initialState = {
  serviceData: {},
};

const drawer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SERVICE_DATA:
      return {
        ...state,
        serviceData: action.payload,
      };
    default:
      return state;
  }
};

export default drawer;
