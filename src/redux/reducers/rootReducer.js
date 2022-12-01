import { combineReducers } from "redux";
import counterReducer from "./counterReducer"
import errorReducer from "./errorReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
	news: newsReducer,
	error: errorReducer
});

export default rootReducer;
