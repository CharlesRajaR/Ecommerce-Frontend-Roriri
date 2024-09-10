import { api } from "../config/api"
import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, DELETE_USER_ADDRESS_FAILURE, DELETE_USER_ADDRESS_REQUEST, DELETE_USER_ADDRESS_SUCCESS, GET_USER_ADDRESS_FAILURE, GET_USER_ADDRESS_REQUEST, GET_USER_ADDRESS_SUCCESS, SELECT_ADDRESS_FAILURE, SELECT_ADDRESS_REQUEST, SELECT_ADDRESS_SUCCESS } from "./ActionType";

export const createUserAddress = ({data, jwt}) => {
    return async(dispatch) =>{
        dispatch({type:CREATE_ADDRESS_REQUEST})

        try{
        const  response  =await api.post('/api/address/create', data, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });

        dispatch({type:CREATE_ADDRESS_SUCCESS, payload:response.data})
        console.log("create address successfull",response.data);
        }
        catch(error){
            dispatch({type:CREATE_ADDRESS_FAILURE, payload:error})
            console.log("create address failure");
        }
    }
}

export const getUserAddress = (jwt) =>{
    return async(dispatch) =>{
        dispatch({type:GET_USER_ADDRESS_REQUEST})

        try{
            const response= await api.get('/api/address/user',
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                }
            );

            dispatch({type:GET_USER_ADDRESS_SUCCESS, payload:response.data})
            console.log("get user address success",response.data)
        }
        catch(error){
            dispatch({type:GET_USER_ADDRESS_FAILURE, payload:error})
            console.log("get user failure")
        }
    }
}

export const selectAddress = (id) => async(dispatch) => {
    dispatch({type:SELECT_ADDRESS_REQUEST})
    try{
        dispatch({type:SELECT_ADDRESS_SUCCESS, payload:id})
        console.log("select address success")
    }
    catch(error){
        dispatch({type:SELECT_ADDRESS_FAILURE, payload:error})
        console.log("select address failure")
    }
}
export const deleteUserAddress = ({jwt, id}) => async(dispatch) =>{
    dispatch({type:DELETE_USER_ADDRESS_REQUEST})

    try{
        const response = api.delete(`/api/delete/address/${id}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:DELETE_USER_ADDRESS_SUCCESS, payload:id})
        console.log("delete user success",response.data)
    }
    catch(error){
        dispatch({type:DELETE_USER_ADDRESS_FAILURE, payload:error})
        console.log('delete address failure')
    }
}
