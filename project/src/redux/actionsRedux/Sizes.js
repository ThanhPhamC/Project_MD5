import { CREAT_SIZE, GET_ALL_SIZE, SEARCH_SIZE, UPDATE_SIZE } from "../../constants/action-redux-Types"
export const act_redux_get_all_size=(sizes)=>{
    return{
        type:GET_ALL_SIZE,
        payload:sizes
    }
}
export const act_redux_creat_size=(size)=>{
    return {
        type: CREAT_SIZE,
        payload: size
    }
}
export const act_redux_update_size=(size)=>{
    return {
        type: UPDATE_SIZE,
        payload: size
    }
}
export const act_redux_search_size=(sizes)=>{
    return {
        type:SEARCH_SIZE,
        payload:sizes
    }
}