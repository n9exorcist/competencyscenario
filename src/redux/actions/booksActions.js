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

export function addRatings(bookId, rating, comment) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    try {
      const state = getState();
      const books = state.books.map((book) => {
        if (book.id === bookId) {
          const updatedRatings = [
            ...book.ratings,
            {
              username: "Anonymous",
              date: new Date().toISOString(),
              rating,
              comment,
            },
          ];
          return { ...book, ratings: updatedRatings };
        }
        return book;
      });

      // Dispatch the action to update the Redux store
      dispatch({
        type: types.ADD_RATING,
        payload: books,
      });

      dispatch(apiCallError()); // End API call
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}
