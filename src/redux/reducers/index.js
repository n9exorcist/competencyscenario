//combine reducers
import { combineReducers } from "redux";
import books from "./booksReducer";
import apiCallsInProgress from "./apiStatusReducer";
// import ratingsReducer from "./ratingsReducer";

const rootReducer = combineReducers({
  books,
  apiCallsInProgress,
  // ratingsReducer,
});

export default rootReducer;
