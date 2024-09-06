import { DELETE_CART_ITEM_FAILURE, DELETE_CART_ITEM_REQUEST } from "../Cart/ActionType"
import { CREATE_CART_ORDER_FAILURE, CREATE_CART_ORDER_REQUEST, CREATE_CART_ORDER_SUCCESS, CREATE_SINGLE_ORDER_FAILURE, CREATE_SINGLE_ORDER_REQUEST, CREATE_SINGLE_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_SUCCESS, GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./ActionType"

const initialState = {
   userOrder:[],
   error:null,
   isLoading:false
}

export const userOrderReducer = (state=initialState, action) =>{
    switch(action.type){
        case CREATE_SINGLE_ORDER_REQUEST:
        case CREATE_CART_ORDER_REQUEST:
        case GET_USER_ORDER_REQUEST:
        case DELETE_CART_ITEM_REQUEST:
            return{
                ...state, isLoading:true, error:null
            }
        case CREATE_SINGLE_ORDER_SUCCESS:
        case CREATE_CART_ORDER_SUCCESS:
            return{
                ...state, isLoading:false, error:null, userOrder:[action.payload, ...state.userOrder]
            }
        case GET_USER_ORDER_SUCCESS:
            return{
                ...state, isLoading:false, error:null, userOrder:action.payload
            }
        case DELETE_ORDER_SUCCESS:
            return{
                ...state, isLoading:false, error:null, userOrder:[state.userOrder.filter((item)=>item.id !== action.payload)]
            }
        case CREATE_SINGLE_ORDER_FAILURE:
        case CREATE_CART_ORDER_FAILURE:
        case GET_USER_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
            return{
                ...state, isLoading:false, error:action.payload
            }
        default:
            return{
                ...state
            }
    }
}