import {
  CREAT_CATEGORY,
  GET_ALL_CATEGORY,
  SEARCH_CATEGORY,
  UPDATE_CATEGORY,
} from "../../constants/action-redux-Types";
const initialState = [];
export const listCatalog = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      state = action.payload;
      return state;
    case CREAT_CATEGORY:
      state = [...state, action.payload];
      return state;
    case UPDATE_CATEGORY:
       state=state.map(catalog =>catalog.id === action.payload.id?action.payload:catalog ) 
      return state
      case SEARCH_CATEGORY:
       return state=action.payload
    default:
      return state;
  }
};
