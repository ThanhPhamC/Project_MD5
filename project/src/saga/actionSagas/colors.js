import { CREAT_COLOR_SAGA, GET_ALL_COLOR_SAGA, SEARCH_COLOR_SAGA, UPDATE_COLOR_SAGA } from "../../constants/action-saga-Types"

export const act_saga_get_all_color=()=>{
    return {
        type: GET_ALL_COLOR_SAGA
    }
}
export const act_saga_creat_color=(color)=>{
    return {
        type:CREAT_COLOR_SAGA,
        payload:color
    }
}
export const act_saga_update_color=(color)=>{
    return{
        type:UPDATE_COLOR_SAGA,
        payload:color
    }
}
export const act_saga_search_color=(colorName)=>{
    return{
        type:SEARCH_COLOR_SAGA,
        payload:colorName
    }
}