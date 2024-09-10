import { LOGOUT_SUCCESS } from "../Authentication/ActionType"
import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./ActionType"

const initialState = {
    products:[],
    product:null,
    error:null,
    isLoading:false
}

export const userProductReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCTS_REQUEST:
        case GET_SINGLE_PRODUCT_REQUEST:
            return{
                ...state, isLoading:true,error:null
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return{
                ...state, isLoading:false, error:null, products:action.payload
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state, isLoading:false, error:null, product:action.payload
            }
        case LOGOUT_SUCCESS:
            return{
            ...initialState
            }
        case GET_ALL_PRODUCTS_FAILURE:
        case GET_SINGLE_PRODUCT_FAILURE:
           return{
            ...state, isLoading:false, error:action.payload
           }
        default:
            return{
                ...state
            }
    }
}