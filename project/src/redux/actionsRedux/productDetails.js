import { CREAT_PRODUCTDETAIL, GET_LIST_PRODUCTDETAIL, UPDATE_PRODUCTDETAIL } from "../../constants/action-redux-Types"
export const act_redux_get_all_productDetail=(productDetails)=>{
    return{
        type:GET_LIST_PRODUCTDETAIL,
        payload:productDetails
    }
}
export const act_redux_creat_productDetail=(productDetail)=>{
    return {
        type: CREAT_PRODUCTDETAIL,
        payload: productDetail
    }
}
export const act_redux_update_productDetail=(productDetail)=>{
    return {
        type: UPDATE_PRODUCTDETAIL,
        payload: productDetail
    }
}
