import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, DELETE_CART_ITEM_FAILURE, DELETE_CART_ITEM_REQUEST, DELETE_CART_ITEM_SUCCESS, GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
    cart:null,
    cartItems:[],
    error:null,
    isLoading:false
}

export const userCartReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_USER_CART_REQUEST:
        case ADD_ITEM_TO_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case DELETE_CART_ITEM_REQUEST:
        case CLEAR_CART_REQUEST:
            return{
                ...state, isLoading:true, error:null
            } 
        case GET_USER_CART_SUCCESS:
        case CLEAR_CART_SUCCESS:
            return{
                ...state, isLoading:false, error:null, cart:action.payload, cartItems:action.payload?.items
            }
        case ADD_ITEM_TO_CART_SUCCESS:
           return{
            ...state, isLoading:false, error:null, cartItems:[action.payload, ...state.cartItems]
           }
        case DELETE_CART_ITEM_SUCCESS:
            return{
            ...state, isLoading:false, error:null, cart:action.payload, cartItems:action.payload?.items
           }
        case UPDATE_CART_ITEM_SUCCESS:
            return{
                ...state, isLoading:false, error:null, cartItems:state.cartItems.map((item)=>
                item.id === action.payload.id ?action.payload:item)
            }
        case GET_USER_CART_FAILURE:
        case ADD_ITEM_TO_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
        case DELETE_CART_ITEM_FAILURE:
        case CLEAR_CART_FAILURE:
            return{
                ...state, error:action.payload, isLoading:false
            }
        default:
            return{
                ...state
            }
    }
}