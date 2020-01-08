
import * as actionTypes from './NotificationActionType';


export const fetchNotifications = (data)=>{

    return {
        type:actionTypes.FetchNotifications,
        data:data
    }
}

export const fetchNotificationsUpdate =(data)=>{

    return{
        type:actionTypes.FetchNotificationsUpdate,
        data:data
    }
}