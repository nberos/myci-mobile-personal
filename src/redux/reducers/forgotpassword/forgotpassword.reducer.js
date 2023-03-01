import * as types from './forgotpassword.actionTypes';

const initialState = {
  username: '',
  seconds: 0,
  code: '',
};

const forgotpassword = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case types.SET_OTP_DURATION:
      return {
        ...state,
        seconds: action.seconds,
      };
    case types.SET_CODECELL_VALUE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};

export default forgotpassword;
