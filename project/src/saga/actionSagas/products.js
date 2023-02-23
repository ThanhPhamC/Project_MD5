import { CREAT_PRODUCT_SAGA, GET_ALL_PRODUCT_SAGA, LAST_PRODUCT_SAGA, LIST_PRODUCT_DETAIL_SAGA, SEARCH_PRODUCT_SAGA, UPDATE_PRODUCT_SAGA } from "../../constants/action-saga-Types"

export const act_saga_get_all_product=()=>{
    return {
        type:GET_ALL_PRODUCT_SAGA
    }
}
export const act_saga_creat_product=(product)=>{
    return {
        type:CREAT_PRODUCT_SAGA,
        payload:product
    }
}
export const act_saga_update_product=(product)=>{
    return{
        type:UPDATE_PRODUCT_SAGA,
        payload:product
    }
}
export const act_saga_search_product=(productName)=>{
    return{
        type:SEARCH_PRODUCT_SAGA,
        payload:productName
    }
}
export const act_saga_last_product=()=>{
    return{
        type: LAST_PRODUCT_SAGA
    }
}
