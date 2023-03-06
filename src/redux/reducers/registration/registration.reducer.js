import * as types from './registration.actionTypes';

const initialState = {
  registerData: {
    firstName: '',
    lastName: '',
    password: '',
    customerType: '',
    userName: '',
  },
  extraData: {
    address: '',
    birthDate: '',
    email: '',
    countryId: '',
  },
  otpData: {
    code: '',
  },
  countiesData: {
    data: [],
    isLoading: false,
    error: null,
  },
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REGISTER_DATA:
      return {
        ...state,
        registerData: {
          ...state.registerData,
          ...action.payload,
        },
      };

    case types.SET_EXTRA_DATA:
      return {
        ...state,
        extraData: {
          ...state.extraData,
          ...action.payload,
        },
      };

    case types.SET_OTP_CODE:
      return {
        ...state,
        otpData: {
          ...state.otpData,
          code: action.payload,
        },
      };

    case types.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countiesData: {
          ...state.countiesData,
          isLoading: true,
        },
      };

    case types.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countiesData: {
          ...state.countiesData,
          isLoading: false,
          data: action.payload,
        },
      };

    case types.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        countiesData: {
          ...state.countiesData,
          isLoading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default registration;
