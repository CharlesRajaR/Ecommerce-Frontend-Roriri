import { api } from "../config/api"
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_STORE_PRODUCT_FAILURE, GET_STORE_PRODUCT_REQUEST, GET_STORE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType"


export const createProduct = ({navigate, jwt, productReq}) => async(dispatch) => {
    dispatch({type:CREATE_PRODUCT_REQUEST})

    try{
        const response = await api.post('/store/product', productReq, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:CREATE_PRODUCT_SUCCESS, payload:response.data})
        navigate('/store')
        console.log("create product success", response.data)
    }
    catch(error){
        dispatch({type:CREATE_PRODUCT_FAILURE, payload:error})
        console.log("create store failure", error)
    }
}

export const getStoreProduct = ({jwt,storeId}) => async(dispatch) =>{
    dispatch({type:GET_STORE_PRODUCT_REQUEST})
    try{
        const response =await api.get(`/store/products/${storeId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:GET_STORE_PRODUCT_SUCCESS, payload:response.data})
        console.log('get store products successfully',response.data)
    }
    catch(error){
        dispatch({type:GET_STORE_PRODUCT_FAILURE, payload:error})
        console.log("get store user failure",error)
    }
}


export const updateStoreProduct = ({jwt, reqData}) => async(dispatch) =>{
    dispatch({type:UPDATE_PRODUCT_REQUEST})

    try{
        const response =await api.put('/store/product/update', reqData, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:UPDATE_PRODUCT_SUCCESS, payload:response.data})
        console.log("updata product success", response.data)

    }
    catch(error){
        dispatch({type:UPDATE_PRODUCT_FAILURE, payload:error})
        console.log("update product failure",error)
    }
}

export const deleteProduct = ({jwt, productId}) => async(dispatch) => {
    dispatch({type:DELETE_PRODUCT_REQUEST})

    try{
        const response = await api.delete(`/store/delete/${productId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:DELETE_PRODUCT_SUCCESS, payload:productId})
        console.log("delete product success",response.data)
    }
    catch(error){
        dispatch({type:DELETE_PRODUCT_FAILURE, payload:error})
        console.log("delete product failure")
    }
}