import { api } from "../config/api";
import { CREATE_CART_ORDER_FAILURE, CREATE_CART_ORDER_REQUEST, CREATE_CART_ORDER_SUCCESS, CREATE_SINGLE_ORDER_FAILURE, CREATE_SINGLE_ORDER_REQUEST, CREATE_SINGLE_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, GET_ITEM_ORDER_FAILURE, GET_ITEM_ORDER_REQUEST, GET_ITEM_ORDER_SUCCESS, GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./ActionType";

export const createSingleOrder = ({jwt, req, navigate}) =>{
    return async(dispatch) =>{

        dispatch({type:CREATE_SINGLE_ORDER_REQUEST})

        try{

            const response  =await api.post(`/api/single/order`,req, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:CREATE_SINGLE_ORDER_SUCCESS, payload:response.data})
        navigate('/orders')
        console.log("create single order success", response.data)
        }
        catch(error){
            dispatch({type:CREATE_SINGLE_ORDER_FAILURE, payload:error})
        }
        
    }
}

export const createCartOrder = ({jwt, address, navigate}) =>{
    return async(dispatch) =>{

        dispatch({type:CREATE_CART_ORDER_REQUEST})

        try{
        const response = await api.post(`/api/cart/order`, address, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        dispatch({type:CREATE_CART_ORDER_SUCCESS, payload:response.data})
        navigate('/orders')
        console.log("create cart order successfully", response.data)
    }
    catch(error){
        dispatch({type:CREATE_CART_ORDER_FAILURE, payload:error})
        console.log("create cart order failure")
    }
    }
}

export const getUserOrder = (jwt) =>{
    return async(dispatch) =>{

        dispatch({type:GET_USER_ORDER_REQUEST})
        try{
        const  response =await api.get(`/api/user/order`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        dispatch({type:GET_USER_ORDER_SUCCESS, payload:response.data})
        console.log("get user order success",response.data)
    }
    catch(error){
        dispatch({type:GET_USER_ORDER_FAILURE, payload:error})
        console.log("get user order failure")
    }
    }
}

export const getItemOfOrder = ({jwt, id}) => async(dispatch) =>{
    dispatch({type:GET_ITEM_ORDER_REQUEST})
    try{
        const response =await api.get(`/api/order/items/${id}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        dispatch({type:GET_ITEM_ORDER_SUCCESS, payload:response.data})
        console.log("get item of order successfully", response.data)
    }
    catch(error){
        dispatch({type:GET_ITEM_ORDER_FAILURE, payload:error})
        console.log("get item of order failure")
    }
}

export const deleteUserOrder = ({jwt, id}) =>{

   
    return async(dispatch) =>{
         dispatch({type:DELETE_ORDER_REQUEST})
         try{
        const  response =await api.delete(`/api/delete/order/${id}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:DELETE_ORDER_SUCCESS, payload:id})
        console.log("delete user order successfully",response.data)
    }
    catch(error){
        dispatch({type:DELETE_ORDER_FAILURE, payload:error})
        console.log("delete user order failure")
    }
    }
}