
import * as actionTypes from './NotificationActionType';



export const notificationUpdateUi=(data)=>{
    return{
        type:actionTypes.notificationUpdateUi,
        data:data
    }
}

// export const getNotificationCount =(data)=>{
//     return{
//         type:actionTypes.getNotificationCount,
//         data:data
//     }
// }

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