import { api } from "../config/api"
import { GET_STORE_ORDER_FAILURE, GET_STORE_ORDER_REQUEST, GET_STORE_ORDER_SUCCESS, UPDATE_STORE_ORDER_FAILURE, UPDATE_STORE_ORDER_REQUEST, UPDATE_STORE_ORDER_SUCCESS } from "./ActionType"

export const getStoreOrder = ({jwt, storeId}) => async(dispatch) =>{
    dispatch({type:GET_STORE_ORDER_REQUEST})
    try{
        const response = await api.get(`/store/order/${storeId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:GET_STORE_ORDER_SUCCESS, payload:response.data})
        console.log("get store order successfully",response.data)
    }
    catch(error){
        dispatch({type:GET_STORE_ORDER_FAILURE, payload:error})
        console.log("get store order failure")
    }
}

export const updateOrder = ({jwt, req}) => async(dispatch) =>{
    dispatch({type:UPDATE_STORE_ORDER_REQUEST})
    try{
        const response = await api.put('/store/update/order/item', req, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })

        dispatch({type:UPDATE_STORE_ORDER_SUCCESS, payload:response.data})
        console.log("update order successfully",response.data)
    }
    catch(error){
        dispatch({type:UPDATE_STORE_ORDER_FAILURE, payload:error})
        console.log("update order failure")
    }
}