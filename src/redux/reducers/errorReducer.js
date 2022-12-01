import { HIDE_ERROR, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from "../types";

const initialState = {
	isError: false,
  latestNewsError: '',
	popularNewsError: ''
};

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS_ERROR:
      return {
        ...state,
        latestNewsError: payload,
				isError: true
      };
		case SET_POPULAR_NEWS_ERROR:
			return {
				...state,
				popularNewsError: payload,
				isError: true
			}
		case HIDE_ERROR:
			return {
				...state, 
				isError: false
			}
    default:
      return state;
  }
};

export default errorReducer;
