import {
  ADDED_CATCALL,
  FETCHED_CATCALL,
  UPDATED_STATUS,
  DELETED_CATCALL,
  CHOSEN_CATCALL,
} from "./actions";

const initialState = {
  expressions: [],
  chosenCatcall: null,
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
    case UPDATED_STATUS: {
      const updatedExpressions = state.expressions.map((expression) => {
        if (expression.id !== payload.id) {
          return expression;
        } else {
          return payload;
        }
      });
      return {
        ...state,
        expressions: updatedExpressions,
      };
    }
    case DELETED_CATCALL: {
      const filteredCatcalls = state.expressions.filter(
        (c) => c.id !== payload
      );
      return {
        ...state,
        expressions: filteredCatcalls,
      };
    }
    case CHOSEN_CATCALL: {
      return {
        ...state,
        chosenCatcall: payload,
      };
    }
    default: {
      return state;
    }
  }
}
