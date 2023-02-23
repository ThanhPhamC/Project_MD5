import {combineReducers} from "redux";
import { listCatalog } from "./listCatagory";
import { listProduct } from "./listProduct";
import { catalogForCreats } from "./listCatalogForCreat";
import { listColor } from "./listColors";
import { listSize } from "./listSize";
import { listProductDetail } from "./listProductDetail";
import { productLast } from "./productLast";
export const rootReducer= combineReducers({listCatalog,listProduct,catalogForCreats,listColor,listSize,listProductDetail,productLast})