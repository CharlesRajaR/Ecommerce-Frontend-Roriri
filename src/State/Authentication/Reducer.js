import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./ActionType"

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
                ...state, isLoading:false, error:null, currentUser:action.payload
            }
        case LOGIN_USER_FAILURE:
        case REGISTER_USER_FAILURE:
        case GET_USER_FAILURE:
            return{
                ...state, isloading:false, error:action.payload
            }

        default:
            return{
                ...state
            }

    }
}