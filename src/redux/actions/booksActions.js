import * as types from "./actionTypes";
import * as booksApi from "../../api/booksApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function updateBookRating(bookId, newRating) {
  return { type: types.UPDATE_BOOK_RATING, bookId, newRating };
}

export function loadBooks() {
  return async (dispatch) => {
    dispatch(beginApiCall());
    try {
      const books = await booksApi.getBooks();
      dispatch(loadBooksSuccess(books));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}
