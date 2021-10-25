import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });
      dispatch(loginSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
