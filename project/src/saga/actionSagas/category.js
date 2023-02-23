
import { CREAT_CATEGORY_SAGA, GET_ALL_CATEGORY_SAGA, GET_CATEGORY_FOR_CREAT_SAGA, SEARCH_CATEGORY_SAGA, UPDATE_CATEGORY_SAGA,  } from "../../constants/action-saga-Types";
export const act_saga_get_all_catalog=()=>{
    return {
        type:GET_ALL_CATEGORY_SAGA,
    }
}
export const act_saga_get_catalog_for_creat=()=>{
    return {
        type:GET_CATEGORY_FOR_CREAT_SAGA
    }
}
export const act_saga_creat_category=(catalog)=>{
    return {
        type: CREAT_CATEGORY_SAGA,
        payload:catalog
    }
}
export const act_saga_edit_category=(catalog)=>{
    return {
        type: UPDATE_CATEGORY_SAGA,
        payload:catalog
    }
}
export const act_saga_search_category=(catalogName)=>{
    return{
        type:SEARCH_CATEGORY_SAGA,
        payload :catalogName
    }
}
