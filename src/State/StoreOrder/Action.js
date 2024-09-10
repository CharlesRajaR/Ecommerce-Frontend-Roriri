import { api } from "../config/api"
import { GET_STORE_ORDER_FAILURE, GET_STORE_ORDER_REQUEST, GET_STORE_ORDER_SUCCESS } from "./ActionType"

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