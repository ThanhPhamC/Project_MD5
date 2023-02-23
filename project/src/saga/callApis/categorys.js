import { act_redux_creat_category, act_redux_get_all_category,act_redux_update_category ,act_redux_get_category_for_creat, act_redux_search_category } from "../../redux/actionsRedux/category";
import { creatCatalogAPI, getAllCatalogAPI, searchCatalogAPI, updateCatalogAPI } from "../../sevice/categoryApi";
import {put, takeEvery} from 'redux-saga/effects'
import { CREAT_CATEGORY_SAGA, GET_ALL_CATEGORY_SAGA, GET_CATEGORY_FOR_CREAT_SAGA, SEARCH_CATEGORY_SAGA, UPDATE_CATEGORY_SAGA } from "../../constants/action-saga-Types";
import { getAllProductApi } from "../../sevice/productApis";
export function* getAllCategory(){
    let categorys= yield getAllCatalogAPI();
    yield put(act_redux_get_all_category(categorys.data));
}
export function* getCatalogForCreat(){
    let categorys= yield getAllCatalogAPI();
    let products = yield getAllProductApi();
    yield put(act_redux_get_category_for_creat(categorys.data,products.data))
}
export function* creatNewCategory(action){
    let category= yield creatCatalogAPI(action.payload);
    yield put(act_redux_creat_category(category.data))
}
export function* updateCategory(action){
    let category= yield updateCatalogAPI(action.payload.id,action.payload)
    yield put(act_redux_update_category(category.data))
}
export function* searchCategory(action){
    let categorys=yield searchCatalogAPI(action.payload)
    yield put(act_redux_search_category(categorys.data))
}
export function* watchCategoryAsync(){
    yield takeEvery(GET_ALL_CATEGORY_SAGA,getAllCategory)
    yield takeEvery(CREAT_CATEGORY_SAGA,creatNewCategory)
    yield takeEvery(GET_CATEGORY_FOR_CREAT_SAGA,getCatalogForCreat)
    yield takeEvery (UPDATE_CATEGORY_SAGA,updateCategory)
    yield takeEvery(SEARCH_CATEGORY_SAGA,searchCategory)
}