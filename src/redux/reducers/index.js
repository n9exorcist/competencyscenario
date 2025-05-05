//combine reducers
import { combineReducers } from "redux";
import books from "./booksReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  books,
  apiCallsInProgress,
});

export default rootReducer;
