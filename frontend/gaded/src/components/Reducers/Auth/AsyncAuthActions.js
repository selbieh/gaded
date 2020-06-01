import * as actions from './AuthActions';


export const asyncsaveFCMToStore =(key)=>{
    return dispatch =>{
        dispatch(actions.saveFCM(key))
    }
}


export const asyncSaveAuthData=(mobile,token) => {
    return dispatch =>{
        const data={'mobile':mobile,'token':token}
        dispatch(actions.saveOTPAndMobile(data))
        localStorage.setItem('mobile',mobile)
        localStorage.setItem('token',token)
    }
}


export const asyncLogout = () =>{
    return dispatch=>{
        dispatch( actions.removeOTPAndMobile())
        localStorage.removeItem('mobile')
        localStorage.removeItem('token')
    }
}