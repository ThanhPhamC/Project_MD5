import {
  CREAT_COLOR,
  GET_ALL_COLOR,
  SEARCH_COLOR,
  UPDATE_COLOR,
} from "../../constants/action-redux-Types";
const initialState = [];
export const listColor = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COLOR:
      return (state = action.payload);
    case CREAT_COLOR:
      return (state = [...state, action.payload]);
    case UPDATE_COLOR:
      return (state = state?.map((color) =>
        action.payload.id == color.id ? action.payload : color
      ));
    case SEARCH_COLOR:
        return state=action.payload
    default:
      return state;
  }
};
