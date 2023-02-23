import { CREAT_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY_FOR_CREAT, SEARCH_CATEGORY, UPDATE_CATEGORY } from "../../constants/action-redux-Types"
export const act_redux_get_all_category=(catalogs)=>{
    return{
        type: GET_ALL_CATEGORY,
        payload: catalogs
    }
}
export const act_redux_get_category_for_creat=(catalogs,products)=>{
    return{
        type: GET_CATEGORY_FOR_CREAT,
        payload: {catalogs,products}
    }
}
export const act_redux_creat_category=(catalog)=>{
    return{
        type: CREAT_CATEGORY,
        payload: catalog
    }
}
export const act_redux_update_category=(catalog)=>{
    return{
        type: UPDATE_CATEGORY,
        payload:catalog
    }
}
export const act_redux_search_category=(catalogs)=>{
    return{
        type: SEARCH_CATEGORY,
        payload:catalogs
    }
}