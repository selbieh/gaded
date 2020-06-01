import * as actions from './AuthActions';
import Axios from '../../Axios/Axios'
export const validateMachine =(mobile,token,FCM)=>{
    return dispatch=>{
        console.log(token)
       Axios({
        method:'post',
        url:'/register-device/',
        headers:{
            Authorization:'Token '.concat(`${token}`),        
        },
        data:{
            mobile:mobile,
            FCM:FCM
        }   
       })
       .then(res=>{
           console.log(res.data)
       })
    }
}


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
        dispatch(validateMachine(mobile,token,localStorage.getItem('FCM')))
    }
}


export const asyncLogout = () =>{
    return dispatch=>{
        dispatch( actions.removeOTPAndMobile())
        localStorage.removeItem('mobile')
        localStorage.removeItem('token')
    }
}

