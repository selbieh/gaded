import * as actionTypes from './AuthActionsType';


export const saveOTPAndMobile =(data) =>{
    return {
        type:actionTypes.SAVE_OTP_AND_MOBILE,
        data:data
    }
 }


 export const removeOTPAndMobile =() =>{
     return {
         type:actionTypes.REMOVE_OTP_AND_MOBILE
     }
 }