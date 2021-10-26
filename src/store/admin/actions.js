import axios from "axios";
import { selectToken } from "./selector";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";

const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const login = (email, password, redirectDashboard) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });
      dispatch(loginSuccess(response.data));
      redirectDashboard();
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const logOut = () => ({ type: LOG_OUT });

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const getAdminWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;
    try {
      const response = await axios.get(`http://localhost:4000/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
    } catch (e) {
      if (e.response) {
        console.log(e.response.message);
      } else {
        console.log(e);
      }
    }
  };
};
