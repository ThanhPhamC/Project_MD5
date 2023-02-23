import {
    CREAT_PRODUCTDETAIL,
    GET_LIST_PRODUCTDETAIL,
    UPDATE_PRODUCTDETAIL,
  } from "../../constants/action-redux-Types";
  const initialState = [];
  export const listProductDetail = (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_PRODUCTDETAIL:
        return (state = action.payload);
      case CREAT_PRODUCTDETAIL:
        return (state = [...state, action.payload]);
      case UPDATE_PRODUCTDETAIL:
        return (state = state?.map((productDetail) =>
          action.payload.id == productDetail.id ? action.payload : productDetail
        ));
      default:
        return state;
    }
  };
  