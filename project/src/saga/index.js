import { all } from "redux-saga/effects";
import { watchCategoryAsync } from "./callApis/categorys";
import { watchColorAsync } from "./callApis/colors";
import { wacthProductDetailAsync } from "./callApis/productDetail";
import { watchProductAsync } from "./callApis/products";
import { wacthSizeAsync } from "./callApis/sizes";
 export function* rootSaga(){
    yield all([
        watchCategoryAsync(),
        watchProductAsync(),
        watchColorAsync(),
        wacthSizeAsync(),
        wacthProductDetailAsync(),
    ])
 }