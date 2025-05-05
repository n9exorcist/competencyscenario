import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function booksReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    case types.UPDATE_BOOK_RATING:
      return state.map((book) => {
        if (book.id === action.bookId) {
          const updatedReviews = [...book.reviews, action.newRating];
          const total = updatedReviews.length;
          const sum = updatedReviews.reduce((acc, r) => acc + r.rating, 0);
          const averageRating = (sum / total).toFixed(1);
          return {
            ...book,
            reviews: updatedReviews,
            averageRating: parseFloat(averageRating),
          };
        }
        return book;
      });
    default:
      return state;
  }
}
