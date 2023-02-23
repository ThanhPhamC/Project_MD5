import { LAST_PRODUCT } from "../../constants/action-redux-Types"
const initialState={}
export const productLast=(state=initialState,action)=>{
    switch (action.type) {
        case LAST_PRODUCT:
            return state=action.payload
        default:
            return state
    }
}