import { api } from "../config/api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, DELETE_CART_ITEM_FAILURE, DELETE_CART_ITEM_REQUEST, DELETE_CART_ITEM_SUCCESS, GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const getUserCart = (jwt) => {
    return async(dispatch) => {
        dispatch({type:GET_USER_CART_REQUEST})
        try{
            const response = await api.get('api/cart',{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            dispatch({type:GET_USER_CART_SUCCESS, payload:response.data})
            console.log("get user cart successfully",response.data)
        }
        catch(error){
            dispatch({type:GET_USER_CART_FAILURE, payload:error})
            console.log("get user cart failure")
        }
    }
}
export const addItemTocart = ({jwt, reqData}) =>{
    return async(dispatch) =>{
        dispatch({type:ADD_ITEM_TO_CART_REQUEST})
        try{
            const  response  = await api.post('/api/add/item-to-cart', reqData, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:response?.data})
            console.log("add item to cart success",response?.data)
        }

        catch(error){
            dispatch({type:ADD_ITEM_TO_CART_FAILURE, payload:error})
            console.log("add item to cart failure")
        }
    }
}

export const updateCartItem = ({jwt, reqData}) =>{
    return async(dispatch) =>{
        dispatch({type:UPDATE_CART_ITEM_REQUEST})
        try{
        const  response  =await api.put(`/api/update/cart-item/${reqData.id}`,{},{
           headers:{
            Authorization:`Bearer ${jwt}`
           },
           params:{
             quantity:reqData.quantity
           }
        });

        dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:response.data})
        console.log("update cart item success")
    }
    catch(error){
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error})
    }
    }
}


export const deleteCartItem = ({jwt, id}) =>{
    return async(dispatch) =>{
        dispatch({type:DELETE_CART_ITEM_REQUEST})

        try{
        const  response = await api.delete(`/api/cart-item/delete/${id}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:DELETE_CART_ITEM_SUCCESS, payload:response.data})
        console.log("delete cart successfully", response.data)
    }
    catch(error){
        dispatch({type:DELETE_CART_ITEM_FAILURE, payload:error})
        console.log("delete cart failure")
    }
    }
}

export const clearCart = ({jwt}) =>{
    return async(dispatch) =>{

        dispatch({type:CLEAR_CART_REQUEST})

        try{
        const response  =await api.put(`/api/clear`,{}, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:CLEAR_CART_SUCCESS, payload:response.data})
        console.log("clear cart successfully",response.data)
    }
    catch(error){
        dispatch({type:CLEAR_CART_FAILURE, payload:error})
        console.log("clear cart failure")
    }
    }
}

