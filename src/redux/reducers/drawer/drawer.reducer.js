import * as types from './drawer.actionTypes';

const initialState = {
  serviceData: {
    person: {},
    company: {},
  },
  isLoading: true,
};

const drawer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SERVICE_DATA_PERSON:
      return {
        ...state,
        serviceData: {
          ...state.serviceData,
          person: {...action.payload},
        },
        isLoading: false,
      };

    case types.SET_SERVICE_DATA_COMPANY:
      return {
        ...state,
        serviceData: {
          ...state.serviceData,
          company: {...action.payload},
        },
        isLoading: false,
      };
    default:
      return state;
  }
};

export default drawer;
