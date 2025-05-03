import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}

// 3. Add Redux Integration
// To manage ratings dynamically, update the Redux store with actions and reducers for handling ratings.

// Action:

export const addRating = (bookId, rating) => ({
  type: types.ADD_RATING,
  payload: { bookId, rating },
});
