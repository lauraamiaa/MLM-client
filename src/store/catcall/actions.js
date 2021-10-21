import axios from "axios";
export const ADDED_CATCALL = "ADDED_CATCALL";

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
