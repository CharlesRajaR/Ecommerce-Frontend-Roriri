import axios from "axios"
import { ADD_TO_FAVORITES_FAILURE, ADD_TO_FAVORITES_REQUEST, ADD_TO_FAVORITES_SUCCESS,
     GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST,
      LOGIN_USER_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_USER_FAILURE,
       REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REMOVE_TO_FAVORITES_FAILURE,
        REMOVE_TO_FAVORITES_REQUEST, REMOVE_TO_FAVORITES_SUCCESS, UPLOAD_USER_PROFILE_FAILURE, UPLOAD_USER_PROFILE_REQUEST, UPLOAD_USER_PROFILE_SUCCESS } from "./ActionType"
import { api, API_URL } from "../config/api"


export const registerUser = (data) => async(dispatch) => {
    dispatch({type:REGISTER_USER_REQUEST})
    try{
        console.log("reqdata",data.userData)
        const  response  = await axios.post(`${API_URL}/auth/signup`, data.userData)
        setTimeout(()=>data.navigate('/reg/success'),500)
        setTimeout(()=>data.navigate('/loginorreg'),1000)
        
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

export const getUserByJwtToken = (req) =>{
    return async(dispatch) =>{
        dispatch({type:GET_USER_REQUEST})
        try{
            const  response =await api.get('/api/user/jwt',{
                headers:{
                    Authorization:`Bearer ${req.jwt}`
                }
            });
            if(response?.data?.role === "ROLE_STORE_OWNER"){
                req.navigate('/store')
            }
            else if(response?.data?.role === "ROLE_CUSTOMER"){
                req.navigate('/')
            }
            else{
                req.navigate('/admin')
            }

            dispatch({type:GET_USER_SUCCESS, payload:response.data})
            console.log("get user successfull",response.data);
        }

        catch(error){
            dispatch({type:GET_USER_FAILURE, payload:error})
            req.navigate('/loginorreg')
            console.log("get user failure");
        }
    }
}


export const uploadUserProfile = ({jwt, req}) => async(dispatch) => {
    dispatch({type:UPLOAD_USER_PROFILE_REQUEST})
    try{
        const response =await api.put(`/api/upload/profile`,req,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        dispatch({type:UPLOAD_USER_PROFILE_SUCCESS, payload:response.data})
        console.log("upload profile success", response.data)
    }
    catch(error){
        dispatch({type:UPLOAD_USER_PROFILE_FAILURE, payload:error})
        console.log("upload profile failure")
    }
}

export const logout = (navigate) => async(dispatch) =>{
    dispatch({type:LOGOUT_REQUEST})

    try{
     localStorage.clear();
    dispatch({type:LOGOUT_SUCCESS})
    console.log("logout successfull")
    setTimeout(()=>navigate('/logout'),1000)
    setTimeout(()=>navigate('/loginorreg'),5000)
    
    
    }

    catch(error){
        dispatch({type:LOGOUT_FAILURE})
        console.log("error",error)
    }
}


export const addToFav = ({jwt, fav}) => async(dispatch) => {
    dispatch({type:ADD_TO_FAVORITES_REQUEST})
    try{
        const response = await api.put("api/add-to-fav", fav ,{
            headers:{
                Authorization:`Bearer ${jwt}`
            },
        });

        dispatch({type:ADD_TO_FAVORITES_SUCCESS, payload:response.data})
        console.log("add to favorites success", response.data)
    }
    catch(error){
        dispatch({type:ADD_TO_FAVORITES_FAILURE, payload:error})
        console.log("Add to favorites failure", error)
    }
}

export const removeToFav = ({jwt, fav}) => async(dispatch) => {
    dispatch({type:REMOVE_TO_FAVORITES_REQUEST})
    try{
        const response =await api.put("/api/remove-to-fav",  fav , {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({type:REMOVE_TO_FAVORITES_SUCCESS, payload:response.data})
        console.log("remove to fav success", response.data)
    }
    catch(error){
        dispatch({type:REMOVE_TO_FAVORITES_FAILURE, payload:error})
        console.log("remove to fav failure")
    }
}