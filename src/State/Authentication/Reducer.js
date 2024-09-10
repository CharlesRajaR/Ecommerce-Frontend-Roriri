import { ADD_TO_FAVORITES_FAILURE, ADD_TO_FAVORITES_REQUEST, ADD_TO_FAVORITES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REMOVE_TO_FAVORITES_FAILURE, REMOVE_TO_FAVORITES_REQUEST, REMOVE_TO_FAVORITES_SUCCESS, UPLOAD_USER_PROFILE_FAILURE, UPLOAD_USER_PROFILE_REQUEST, UPLOAD_USER_PROFILE_SUCCESS } from "./ActionType"

const initialState = {
    jwt:null,
    currentUser:null,
    isLoading:false,
    error:null,
    favorites:[],
    message:""
}

export const authReducer = (state=initialState, action) => {
    switch(action.type){
        case REGISTER_USER_REQUEST:
        case LOGIN_USER_REQUEST:
        case GET_USER_REQUEST:
        case UPLOAD_USER_PROFILE_REQUEST:
        case ADD_TO_FAVORITES_REQUEST:
        case REMOVE_TO_FAVORITES_REQUEST:
            return{
                ...state,isLoading:true,error:null
            } 
            
        case LOGIN_USER_SUCCESS:
            return{
                ...state, isLoading:false, jwt:action.payload?.jwt , error:null, message:"user Logedin"
            }
        case REGISTER_USER_SUCCESS:
            return{
                ...state, isLoading:false, error:null, message:"register user success"
            }
        case GET_USER_SUCCESS:
            return{
                ...state, isLoading:false, error:null, currentUser:action.payload, favorites:action.payload?.favourites
            }
        case UPLOAD_USER_PROFILE_SUCCESS:
           return{
              ...state, isLoading:false, error:null, currentUser:action.payload
           }
        case ADD_TO_FAVORITES_SUCCESS:
            return{
                ...state, isLoading:false, error:null, currentUser:action.payload, favorites:action.payload?.favourites
            }
        case REMOVE_TO_FAVORITES_SUCCESS:
            return{
                ...state, isLoading:false, error:null, currentUser:action.payload, favorites:action.payload?.favourites
            }
        case LOGOUT_SUCCESS:
            return{
            ...initialState
            }
        case LOGIN_USER_FAILURE:
        case REGISTER_USER_FAILURE:
        case GET_USER_FAILURE:
        case UPLOAD_USER_PROFILE_FAILURE:
        case ADD_TO_FAVORITES_FAILURE:
        case REMOVE_TO_FAVORITES_FAILURE:
            return{
                ...state, isloading:false, error:action.payload
            }

        default:
            return{
                ...state
            }

    }
}