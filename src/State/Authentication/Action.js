import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./ActionType"
import { api, API_URL } from "../config/api"


export const registerUser = (data) => async(dispatch) => {
    dispatch({type:REGISTER_USER_REQUEST})
    try{
        console.log("reqdata",data.userData)
        const  response  = await axios.post(`${API_URL}/auth/signup`, data.userData)
        data.navigate('/loginorreg')
        dispatch({type:REGISTER_USER_SUCCESS, payload:response?.data })
        console.log("register user successfull",response?.data)
    }
    catch(error){
        dispatch({type:REGISTER_USER_FAILURE, payload:error})
        console.log("register user failure",error)
    }
}

export const loginUser = (data) => async(dispatch) => {
    dispatch({type:LOGIN_USER_REQUEST})
    
    try{
        const response = await axios.post(`${API_URL}/auth/signin`, data.userData)
        dispatch({type:LOGIN_USER_SUCCESS, payload:response.data})

        if(response?.data?.jwt !== null){
            localStorage.setItem("jwt", response?.data?.jwt);
        }
        if(response?.data?.role === 'ROLE_STORE_OWNER'){
            data.navigate('/store')
        }
        else if(response?.data?.role === 'ROLE_CUSTOMER'){
            data.navigate('/')
        }
        else{
            data.navigate('/admin')
        }
        console.log("login user successfully",response.data)
    }

    catch(error){
        dispatch({type:LOGIN_USER_FAILURE,payload:error})
        console.log("login user failure",error)
    }
}

export const getUserByJwtToken = (jwt) =>{
    return async(dispatch) =>{
        dispatch({type:GET_USER_REQUEST})
        try{
            const { response } = api.get('/user/jwt',{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });

            dispatch({type:GET_USER_SUCCESS, payload:response})
            console.log("get user successfull",response);
        }

        catch(error){
            dispatch({type:GET_USER_FAILURE, payload:error})
            console.log("get user failure");
        }
    }
}