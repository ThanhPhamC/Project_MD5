import { put, takeEvery } from "redux-saga/effects";
import {
  CREAT_PRODUCT_SAGA,
  GET_ALL_PRODUCT_SAGA,
  LAST_PRODUCT_SAGA,
  SEARCH_PRODUCT_SAGA,
  UPDATE_PRODUCT_SAGA,
} from "../../constants/action-saga-Types";
import {
  act_redux_creat_product,
  act_redux_get_all_product,
  act_redux_get_last_product,
  act_redux_search_product,
  act_redux_update_product,
} from "../../redux/actionsRedux/products";
import {
  creatProductApi,
  getAllProductApi,
  searchProductApi,
  updateProductApi,
} from "../../sevice/productApis";
export function* getAllProduct() {
  const products = yield getAllProductApi();
  yield put(act_redux_get_all_product(products.data));
}
export function*creatNewProduct(action){
  let product =yield creatProductApi(action.payload)
  yield put(act_redux_creat_product(product.data))
}
export function* updateProduct(action) {
  let product = yield updateProductApi(action.payload);
  yield put(act_redux_update_product(product.data));
}
export function* searchProduct(action) {
  let products = yield searchProductApi(action.payload);
  yield put(act_redux_search_product(products.data));
}
export function* lastProduct() {
  let products = yield getAllProductApi();
  yield put(act_redux_get_last_product(products.data[products.data.length-1]));
}
export function* watchProductAsync() {
  yield takeEvery(GET_ALL_PRODUCT_SAGA, getAllProduct);
  yield takeEvery(CREAT_PRODUCT_SAGA, creatNewProduct);
  yield takeEvery(UPDATE_PRODUCT_SAGA, updateProduct);
  yield takeEvery(SEARCH_PRODUCT_SAGA, searchProduct);
  yield takeEvery(LAST_PRODUCT_SAGA,lastProduct);
}
