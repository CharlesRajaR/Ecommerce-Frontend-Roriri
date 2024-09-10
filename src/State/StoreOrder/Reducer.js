import { LOGOUT_SUCCESS } from "../Authentication/ActionType"
import { GET_STORE_ORDER_FAILURE, GET_STORE_ORDER_REQUEST, GET_STORE_ORDER_SUCCESS } from "./ActionType"

const initialState = {
    storeOrder:[],
    error:null,
    isloading:false
}

export const storeOrderReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_STORE_ORDER_REQUEST:
            return{
                ...state, error:null, isloading:true
            }
        case GET_STORE_ORDER_SUCCESS:
            return{
                ...state, error:null, isLoading:false, storeOrder:action.payload
            }
        case LOGOUT_SUCCESS:
            return{
                ...initialState
            }
        case GET_STORE_ORDER_FAILURE:
            return{
                ...state, error:action.payload, isLoading:false
            }
        default:
            return{
                ...state
            }
    }
}