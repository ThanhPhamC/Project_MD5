import {
  CREAT_SIZE,
  GET_ALL_SIZE,
  SEARCH_SIZE,
  UPDATE_SIZE,
} from "../../constants/action-redux-Types";

const initialState = [];
export const listSize = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SIZE:
      return (state = action.payload);
    case CREAT_SIZE:
      return (state = [...state, action.payload]);
    case UPDATE_SIZE:
      return (state = state?.map((size) =>
        action.payload.id == size.id ? action.payload : size
      ));
    case SEARCH_SIZE:
      return (state = action.payload);
    default:
      return state;
  }
};
