import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./redux/reducer";
import { rootSaga } from "./saga";
const sagamiddleware= createSagaMiddleware();
const middlewares=[sagamiddleware];
export const store= createStore(rootReducer,applyMiddleware(...middlewares))
sagamiddleware.run(rootSaga)