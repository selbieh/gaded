import * as actions from './AuthActions';


export const asyncSaveAuthData=(mobile,token) => {
    return dispatch =>{
        const data={'mobile':mobile,'token':token}
        dispatch(actions.saveOTPAndMobile(data))
        localStorage.setItem('mobile',mobile)
        localStorage.setItem('token',token)
    }
}