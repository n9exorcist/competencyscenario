import * as types from "./actionTypes";

export function addRating(bookId, newRating) {
  return {
    type: types.ADD_RATING,
    payload: {
      id: bookId,
      newRating: { ...newRating }, // Ensure the new rating is cloned
    },
  };
}
