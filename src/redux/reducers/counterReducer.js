import { DECREASE_COUNT, INCREASE_COUNT } from "../types";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
