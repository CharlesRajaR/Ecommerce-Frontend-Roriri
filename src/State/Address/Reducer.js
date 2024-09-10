import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, DELETE_USER_ADDRESS_FAILURE, DELETE_USER_ADDRESS_REQUEST, DELETE_USER_ADDRESS_SUCCESS, GET_USER_ADDRESS_FAILURE, GET_USER_ADDRESS_REQUEST, GET_USER_ADDRESS_SUCCESS, SELECT_ADDRESS_FAILURE, SELECT_ADDRESS_REQUEST, SELECT_ADDRESS_SUCCESS } from "./ActionType"

const initialState ={
    userAddress:[],
    error:null,
    isLoading:false,
    selectAddress:null
}

export const addressReducer = (state= initialState, action) =>{
    switch(action.type){
        case CREATE_ADDRESS_REQUEST:
        case GET_USER_ADDRESS_REQUEST:
        case SELECT_ADDRESS_REQUEST:
        case DELETE_USER_ADDRESS_REQUEST:
            return{
                ...state, error:null, isLoading:true
            }
        case CREATE_ADDRESS_SUCCESS:
            return{
                ...state, error:null, isLoading:false, userAddress:[action.payload, ...state.userAddress]
            }
        case GET_USER_ADDRESS_SUCCESS:
            return{
               ...state, error:null, isLoading:false, userAddress:action.payload
            
            }
        case DELETE_USER_ADDRESS_SUCCESS:
            return{
               ...state, error:null, isLoading:false, userAddress:state.userAddress.filter((item)=>item.id !== action.payload)
            
            }
        case SELECT_ADDRESS_SUCCESS:
            return{
                ...state, error:null, isLoading:false, selectAddress:state.userAddress.filter((item)=>item.id === action.payload)
            }
        case CREATE_ADDRESS_FAILURE:
        case SELECT_ADDRESS_FAILURE:
        case GET_USER_ADDRESS_FAILURE:
        case DELETE_USER_ADDRESS_FAILURE:
            return{
                ...state, error:action.payload, isLoading:false
            }
        default:
            return{
                ...state
            }
    }
}