import * as types from './auth.actionTypes';

const initalState = {
  tokens: [],
  isToken: false,
};

const auth = (state = initalState, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state,
        tokens: [...state.tokens, action.token],
        isToken: true,
      };
    case types.REMOVE_TOKEN:
      return {
        ...state,
        tokens: [],
        isToken: false,
      };
    default:
      return state;
  }
};

export default auth;
