import { put, takeEvery } from "redux-saga/effects";
import { CREAT_PRODUCTDETAIL_SAGA,  LIST_PRODUCT_DETAIL_SAGA,  UPDATE_PRODUCTDETAIL_SAGA } from "../../constants/action-saga-Types";
import { act_redux_creat_productDetail, act_redux_get_all_productDetail,  act_redux_update_productDetail } from "../../redux/actionsRedux/productDetails";
import { creatProductDetailApi, getAllProductDetailApi,  updateProductDetailApi } from "../../sevice/productDetailApi";

export function* getAllProductDetail(action){
    let productDetails= yield getAllProductDetailApi(action.payload)
    yield put(act_redux_get_all_productDetail(productDetails.data))
}
export function*creatProductDetail(action){
    let productDetail=yield creatProductDetailApi(action.payload)
    yield put (act_redux_creat_productDetail(productDetail.data))
}
export function* updateProductDetail(action){
    let productDetail=yield updateProductDetailApi(action.payload)
    yield put(act_redux_update_productDetail(productDetail.data))
}

export function* wacthProductDetailAsync(){
    yield takeEvery(LIST_PRODUCT_DETAIL_SAGA,getAllProductDetail)
    yield takeEvery(CREAT_PRODUCTDETAIL_SAGA,creatProductDetail)
    yield takeEvery(UPDATE_PRODUCTDETAIL_SAGA,updateProductDetail)
}