import { CREAT_PRODUCTDETAIL_SAGA, LIST_PRODUCT_DETAIL_SAGA, UPDATE_PRODUCTDETAIL_SAGA } from "../../constants/action-saga-Types"

export const act_saga_list_productDetail=(productId)=>{
    console.log("rell callllll------creat",productId);
    return{
        type:LIST_PRODUCT_DETAIL_SAGA,
        payload:productId
    }
}
export const act_saga_creat_product_detail=(productDetail)=>{
    return{
        type:CREAT_PRODUCTDETAIL_SAGA,
        payload:productDetail
    }
}
export const act_saga_edit_product_detail=(productDetail)=>{
    return{
        type:UPDATE_PRODUCTDETAIL_SAGA,
        payload:productDetail
    }
}
