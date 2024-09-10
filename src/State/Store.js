import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit"
import { thunk } from 'redux-thunk'
import { authReducer } from "./Authentication/Reducer"
import { storeReducer } from "./store/Reducer";
import { storeProductReducer } from "./StoreProduct/Reducer";
import { userProductReducer } from "./Product/Reducer";
import { userOrderReducer } from "./Order/Reducer";
import { userCartReducer } from "./Cart/Reducer";
import { addressReducer } from "./Address/Reducer";
import { storeOrderReducer } from "./StoreOrder/Reducer";

const rooteReducer = combineReducers({
    auth:authReducer,
    store:storeReducer,
    storeProduct:storeProductReducer,
    storeOrder:storeOrderReducer,
    userProduct:userProductReducer,
    userOrder:userOrderReducer,
    userCart:userCartReducer,
    address:addressReducer,
})

export const store = legacy_createStore(rooteReducer ,applyMiddleware(thunk));