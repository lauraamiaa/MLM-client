import axios from "axios";

export const FETCH_RESPONSES = "FETCH_RESPONSES";
export const RESPONSE_CHOSEN = "RESPONSE_CHOSEN";

const dataFetched = (responses) => ({
  type: FETCH_RESPONSES,
  payload: responses,
});

export const responseChosen = (response) => ({
  type: RESPONSE_CHOSEN,
  payload: response,
});

export function fetchResponses() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(
        "https://bark-back-bitches.herokuapp.com/responses"
      );
      dispatch(dataFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
