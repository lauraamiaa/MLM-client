import axios from "axios";

export const FETCH_RESPONSES = "FETCH_RESPONSES";

const dataFetched = (responses) => ({
  type: FETCH_RESPONSES,
  payload: responses, // responses: [{}, {}]
});

export const responseChosen = (response) => ({
  type: "RESPONSE_CHOSEN",
  payload: response,
});

export function fetchResponses() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:4000/responses");
      // console.log("response fetch responses", response.data); // [{}, {}]
      dispatch(dataFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
