import * as types from "../actions/actionTypes";

export default function ratingsReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_RATING:
      return action.payload; // Updated books array with new ratings
    default:
      return state;
  }
}
