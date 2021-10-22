import { ADDED_CATCALL, FETCHED_CATCALL } from "./actions";

const initialState = {
  expressions: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCHED_CATCALL: {
      return {
        ...state,
        expressions: [...state.expressions, ...payload],
      };
    }
    case ADDED_CATCALL: {
      return {
        ...state,
        expressions: [...state.expressions, payload],
      };
    }

    default: {
      return state;
    }
  }
}
