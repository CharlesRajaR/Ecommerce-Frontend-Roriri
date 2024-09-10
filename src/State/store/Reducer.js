import { LOGOUT_SUCCESS } from "../Authentication/ActionType"
import { CREATE_STORE_FAILURE, CREATE_STORE_REQUEST, CREATE_STORE_SUCCESS, GET_USER_STORE_FAILURE, GET_USER_STORE_REQUEST, GET_USER_STORE_SUCCESS } from "./ActionType"


const initialState = {
    store:null,
    error:null,
    isLoading:false
}


export const storeReducer = (state=initialState, action) =>{
    switch(action.type){
        case CREATE_STORE_REQUEST:
        case GET_USER_STORE_REQUEST:
            return{
                ...state, isLoading:true, error:null
            }
        case CREATE_STORE_SUCCESS:
            return{
                ...state, isLoading:false, error:null, store:action.payload
            }
        case LOGOUT_SUCCESS:
            return{
            ...initialState
            }
        case GET_USER_STORE_SUCCESS:
            return{
                ...state, isLoading:false, error:null, store:action.payload
            }
        case CREATE_STORE_FAILURE:
        case GET_USER_STORE_FAILURE:
            return{
                ...state, isLoading:false, error:action.payload
            }
        default:
            return{
                ...state
            }
    }
}