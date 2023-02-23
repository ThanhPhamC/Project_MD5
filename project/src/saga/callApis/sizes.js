import { put, takeEvery } from "redux-saga/effects";
import { CREAT_SIZE_SAGA, GET_ALL_SIZE_SAGA, SEARCH_SIZE_SAGA, UPDATE_SIZE_SAGA } from "../../constants/action-saga-Types";
import { act_redux_creat_size, act_redux_get_all_size, act_redux_search_size, act_redux_update_size } from "../../redux/actionsRedux/Sizes";
import { creatSizeApi, getAllSizeApi, searchSizeApi, updateSizeApi } from "../../sevice/sizeApi";

export function* getAllSize(){
    let sizes= yield getAllSizeApi()
    yield put(act_redux_get_all_size(sizes.data))
}
export function*creatSize(action){
    let size=yield creatSizeApi(action.payload)
    yield put (act_redux_creat_size(size.data))
}
export function* updateSize(action){
    let size=yield updateSizeApi(action.payload)
    yield put(act_redux_update_size(size.data))
}
export function* searchSize(action){
    let sizes= yield searchSizeApi(action.payload)
    yield put(act_redux_search_size(sizes.data))
}
export function* wacthSizeAsync(){
    yield takeEvery(GET_ALL_SIZE_SAGA,getAllSize)
    yield takeEvery(CREAT_SIZE_SAGA,creatSize)
    yield takeEvery(UPDATE_SIZE_SAGA,updateSize)
    yield takeEvery(SEARCH_SIZE_SAGA,searchSize)
}