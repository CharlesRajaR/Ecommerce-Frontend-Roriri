import { LOGOUT_SUCCESS } from "../Authentication/ActionType"
import { storeReducer } from "../store/Reducer"
import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS , CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST, GET_STORE_PRODUCT_REQUEST, GET_STORE_PRODUCT_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType"

const initialState = {
   product:null,
   storeProducts:[],
   error:null,
   isLoading:false
}


export const storeProductReducer = (state= initialState, action)=>{
    switch(action.type){
        case CREATE_PRODUCT_REQUEST:
        case GET_STORE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:
            return{
                ...state, isLoading:true, error:null
            }
        case GET_STORE_PRODUCT_SUCCESS:
            return{
                ...state, isLoading:false, error:null, storeProducts:action.payload
            }
        case CREATE_PRODUCT_SUCCESS:
            return{
                ...state, isLoading:false, error:null, storeProducts:[action.payload, ...state.storeProducts]
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state, isLoading:false, error:null, storeProducts:state.storeProducts.filter((item)=>item.id !== action.payload)
            }
        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state, isLoading:false, error:null, storeProducts:state.storeProducts.map((item)=>item.id === action.payload.id?action.payload:item)
            }
        case LOGOUT_SUCCESS:
            return{
            ...initialState
            }
        default:
            return{
                ...state
            }
    }
}