import axios from "axios";
import { selectToken } from "../admin/selector";
export const ADDED_CATCALL = "ADDED_CATCALL";
export const FETCHED_CATCALL = "FETCH_CATCALL";
export const ADDED_TO_ADMIN = "ADDED_TO_ADMIN";
export const UPDATED_STATUS = "UPDATED_STATUS";
export const DELETED_CATCALL = "DELETED_CATCALL";
export const CHOSEN_CATCALL = "CHOSEN_CATCALL";

export const fetchedCatcall = (data) => ({
  type: FETCHED_CATCALL,
  payload: data,
});

export function fetchCatcall() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://bark-back-bitches.herokuapp.com/catcalls`
      );
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

export const chosenCatcall = (data) => ({
  type: CHOSEN_CATCALL,
  payload: data,
});

export function addCatcall(expression) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        `https://bark-back-bitches.herokuapp.com/catcalls`,
        {
          expression,
        }
      );
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
    const token = selectToken(getState());
    console.log("token", token);
    try {
      console.log("data", data);
      const response = await axios.patch(
        `https://bark-back-bitches.herokuapp.com/catcalls/${data.id}`,
        { data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(updatedStatus(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const catcallRemoved = (id) => ({
  type: DELETED_CATCALL,
  payload: id,
});

export function deleteCatcall(id) {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    try {
      await axios.delete(
        `https://bark-back-bitches.herokuapp.com/catcalls/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(catcallRemoved(id));
    } catch (e) {
      console.log(e.message);
    }
  };
}
