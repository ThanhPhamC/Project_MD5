import { put, takeEvery } from "redux-saga/effects";
import { CREAT_COLOR_SAGA, GET_ALL_COLOR_SAGA, SEARCH_COLOR_SAGA, UPDATE_COLOR_SAGA } from "../../constants/action-saga-Types";
import { act_redux_creat_color, act_redux_get_all_color, act_redux_search_color, act_redux_update_color } from "../../redux/actionsRedux/colors";
import { creatColorApi, getAllColorApi, searchColorApi, updateColorApi } from "../../sevice/colorApi";
export function* getAllColor(){
    let colors= yield getAllColorApi();
    yield put(act_redux_get_all_color(colors.data) )
}
export function*creatColor(action){
    let color=yield creatColorApi(action.payload)
    yield put (act_redux_creat_color(color.data))
}
export function* updateColor(action){
    let color=yield updateColorApi(action.payload)
    yield put(act_redux_update_color(color.data))
}
export function* searchColor(action){
    let colors= yield searchColorApi(action.payload)
    yield put(act_redux_search_color(colors.data))
}
export  function* watchColorAsync(){
            yield takeEvery(GET_ALL_COLOR_SAGA,getAllColor)
            yield takeEvery(CREAT_COLOR_SAGA,creatColor)
            yield takeEvery(UPDATE_COLOR_SAGA,updateColor)
            yield takeEvery(SEARCH_COLOR_SAGA,searchColor)
}