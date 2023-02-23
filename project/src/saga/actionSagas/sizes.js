import { CREAT_SIZE_SAGA, GET_ALL_SIZE_SAGA, SEARCH_SIZE_SAGA, UPDATE_SIZE_SAGA } from "../../constants/action-saga-Types"

export const act_saga_get_all_size=()=>{
    return {
        type:GET_ALL_SIZE_SAGA
    }
}
export const act_saga_creat_size=(size)=>{
    return {
        type:CREAT_SIZE_SAGA,
        payload:size
    }
}
export const act_saga_update_size=(size)=>{
    return{
        type:UPDATE_SIZE_SAGA,
        payload:size
    }
}
export const act_saga_search_size=(sizeName)=>{
    return{
        type:SEARCH_SIZE_SAGA,
        payload:sizeName
    }
}