import { ADD_RATING } from "../actions/ratingsActions";
// 4. Reducer:
export default function ratingsReducer(state = {}, action) {
  switch (action.type) {
    case ADD_RATING:
      const { bookId, rating } = action.payload;
      return {
        ...state,
        [bookId]: [...(state[bookId] || []), rating],
      };
    default:
      return state;
  }
}
