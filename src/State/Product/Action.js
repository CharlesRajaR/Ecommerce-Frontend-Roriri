import { api } from "../config/api"
import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./ActionType"

export const getAllProducts = (jwt) =>{
    return async(dispatch) =>{
         dispatch({type:GET_ALL_PRODUCTS_REQUEST})
         try{
            const  response  = await api.get('/api/products',{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });

            dispatch({type:GET_ALL_PRODUCTS_SUCCESS, payload:response?.data})
            console.log("get all products success",response.data)
         }
         catch(error){
            dispatch({type:GET_ALL_PRODUCTS_FAILURE, payload:error})
            console.log("get all products failure",error);
         }
    }
}

export const getSingleProducts = ({jwt,id}) =>{
    return async(dispatch) =>{
         dispatch({type:GET_SINGLE_PRODUCT_REQUEST})
         try{
            const  response  = await api.get(`/api/product/${id}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });

            
            dispatch({type:GET_SINGLE_PRODUCT_SUCCESS, payload:response?.data})
            console.log("get single product success",response?.data)
         }
         catch(error){
            dispatch({type:GET_SINGLE_PRODUCT_FAILURE, payload:error})
            console.log("get single products failure");
         }
    }
}