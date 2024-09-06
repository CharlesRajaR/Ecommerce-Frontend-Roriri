import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit"
import { thunk } from 'redux-thunk'
import { authReducer } from "./Authentication/Reducer"
import { storeReducer } from "./store/Reducer";
import { storeProductReducer } from "./StoreProduct/Reducer";
import { userProductReducer } from "./Product/Reducer";
import { userOrderReducer } from "./Order/Reducer";
import { userCartReducer } from "./Cart/Reducer";

const rooteReducer = combineReducers({
    auth:authReducer,
    store:storeReducer,
    storeProduct:storeProductReducer,
    userProduct:userProductReducer,
    userOrder:userOrderReducer,
    userCart:userCartReducer,
})

export const store = legacy_createStore(rooteReducer ,applyMiddleware(thunk));