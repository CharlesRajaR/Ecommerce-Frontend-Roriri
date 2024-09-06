import { api } from "../config/api"
import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, GET_USER_ADDRESS_FAILURE, GET_USER_ADDRESS_REQUEST, GET_USER_ADDRESS_SUCCESS } from "./ActionType";

export const createUserAddress = ({data, jwt}) => {
    return async(dispatch) =>{
        dispatch({type:CREATE_ADDRESS_REQUEST})

        try{
        const { response } =await api.post('/address/create', data, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });

        dispatch({type:CREATE_ADDRESS_SUCCESS, payload:response})
        console.log("create address successfull",response);
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
            const { response } = await api.get('/address/user',
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                }
            );

            dispatch({type:GET_USER_ADDRESS_SUCCESS, payload:response})
            console.log("get user address success",response)
        }
        catch(error){
            dispatch({type:GET_USER_ADDRESS_FAILURE, payload:error})
            console.log("get user failure")
        }
    }
}