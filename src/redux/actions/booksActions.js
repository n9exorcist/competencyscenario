import * as types from "./actionTypes";
import * as booksApi from "../../api/booksApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return booksApi
      .getBooks()
      .then((books) => {
        dispatch(loadBooksSuccess(books));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
