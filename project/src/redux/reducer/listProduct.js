import { CREAT_PRODUCT, GET_ALL_PRODUCT, SEARCH_PRODUCT, UPDATE_PRODUCT } from "../../constants/action-redux-Types";

const initialState=[]
export const listProduct=(state=initialState, action)=>{
    switch (action.type) {
        case GET_ALL_PRODUCT:
            state=action.payload
            return state
            case CREAT_PRODUCT:
                return (state = [...state, action.payload]);
              case UPDATE_PRODUCT:
                return (state = state?.map((size) =>
                  action.payload.id == size.id ? action.payload : size
                ));
              case SEARCH_PRODUCT:
                return (state = action.payload);
              default: 
              return state
    }
    
}