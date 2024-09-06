import { api } from '../config/api';
import { CREATE_STORE_FAILURE, CREATE_STORE_REQUEST, CREATE_STORE_SUCCESS, GET_USER_STORE_FAILURE, GET_USER_STORE_REQUEST, GET_USER_STORE_SUCCESS } from './ActionType';

export const createStore = ({jwt, reqData}) => async(dispatch) => {

    dispatch({type:CREATE_STORE_REQUEST})

    try{
    const response = await api.post('/store/create', reqData,{
        headers:{
        Authorization:`Bearer ${jwt}`
        }
    });

    dispatch({type:CREATE_STORE_SUCCESS, payload:response.data})
    console.log("create store success",response.data)
}
catch(error){
    dispatch({type:CREATE_STORE_FAILURE, payload:error})
    console.log("create store failure", error)
}
}

export const getUserStore = (jwt) => async(dispatch) => {

    dispatch({type:GET_USER_STORE_REQUEST})

    try{
    const response = await api.get('/store/owner',{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
    } );

    dispatch({type:GET_USER_STORE_SUCCESS, payload:response.data})
    console.log("get user store success",response.data)
}
catch(error){
    dispatch({type:GET_USER_STORE_FAILURE, payload:error})
    console.log("get user store failure", error)
}
}