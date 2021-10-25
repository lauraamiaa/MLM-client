import axios from "axios";
export const ADDED_CATCALL = "ADDED_CATCALL";
export const FETCHED_CATCALL = "FETCH_CATCALL";
export const ADDED_TO_ADMIN = "ADDED_TO_ADMIN";
export const UPDATED_STATUS = "UPDATED_STATUS";

export const fetchedCatcall = (data) => ({
  type: FETCHED_CATCALL,
  payload: data,
});

export function fetchCatcall() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:4000/catcalls`);
      dispatch(fetchedCatcall(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const addedCatcall = (data) => ({
  type: ADDED_CATCALL,
  payload: data,
});

export function addCatcall(expression) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/catcalls`, {
        expression,
      });
      dispatch(addedCatcall(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const updatedStatus = (data) => ({
  type: UPDATED_STATUS,
  payload: data,
});

export function updateStatusCatcall(data) {
  return async (dispatch, getState) => {
    try {
      console.log("data", data);
      const response = await axios.patch(
        `http://localhost:4000/catcalls/${data.id}`,
        { data }
      );
      dispatch(updatedStatus(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
