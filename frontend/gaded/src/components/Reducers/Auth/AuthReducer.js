import * as actionTypes from './AuthActionsType';


const intState={
    mobile:null,
    token:null,
    FCM:null

}

const AuthReducer = (state=intState ,action)=>{
    const clonedState={...state}

    switch (action.type){
        case actionTypes.SAVE_OTP_AND_MOBILE :
            clonedState.mobile=action.data.mobile
            clonedState.token=action.data.token
            return clonedState
        case actionTypes.REMOVE_OTP_AND_MOBILE :
            clonedState.mobile=null
            clonedState.token=null
            return clonedState
        
    default: return state;
    }    
}
export default AuthReducer;


