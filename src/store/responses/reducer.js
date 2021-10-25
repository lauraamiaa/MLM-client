import { FETCH_RESPONSES, RESPONSE_CHOSEN } from "./actions";

const initialState = {
  all: [],
  chosen: null,
};
export default function responseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESPONSES: {
      return {
        ...state,
        all: [...action.payload],
      };
    }
    case RESPONSE_CHOSEN: {
      return { ...state, chosen: action.payload };
    }
    default: {
      return state;
    }
  }
}
