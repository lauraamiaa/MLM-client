import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: null,
  email: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case LOG_OUT:
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
