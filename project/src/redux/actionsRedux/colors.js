import { CREAT_COLOR, GET_ALL_COLOR, SEARCH_COLOR, UPDATE_COLOR } from "../../constants/action-redux-Types"

export const act_redux_get_all_color=(colors)=>{
    return {
        type: GET_ALL_COLOR,
        payload:colors
    }
}
export const act_redux_creat_color=(color)=>{
    return {
        type: CREAT_COLOR,
        payload: color
    }
}
export const act_redux_update_color=(color)=>{
    return {
        type: UPDATE_COLOR,
        payload: color
    }
}
export const act_redux_search_color=(colors)=>{
    return {
        type:SEARCH_COLOR,
        payload:colors
    }
}