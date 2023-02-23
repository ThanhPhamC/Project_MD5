import { CREAT_PRODUCT, GET_ALL_PRODUCT, LAST_PRODUCT, SEARCH_PRODUCT, UPDATE_PRODUCT } from "../../constants/action-redux-Types"

export const act_redux_get_all_product=(products)=>{
    return {
        type:GET_ALL_PRODUCT,
        payload:products
    }
}
export const act_redux_creat_product=(product)=>{
    console.log("step 3");
    return {
        type: CREAT_PRODUCT,
        payload: product
    }
}
export const act_redux_update_product=(product)=>{
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}
export const act_redux_search_product=(products)=>{
    return {
        type:SEARCH_PRODUCT,
        payload:products
    }
}
export const act_redux_get_last_product=(product)=>{
    return{
        type :LAST_PRODUCT,
        payload:product
    }
}
