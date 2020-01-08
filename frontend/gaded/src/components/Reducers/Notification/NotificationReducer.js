import * as actionTypes from './NotificationActionType';


const intState={
    results:[]
}




const NotificationsReducer = (state=intState ,action)=>{
    let clonedState={...state}

   
    switch (action.type){
        case actionTypes.FetchNotifications :
             const clonedResults=[...clonedState.results]
             const results=clonedResults.concat(action.data.results)
            // clonedState['results']=updatedReuslts
            return {...action.data,results}
        case actionTypes.FetchNotificationsUpdate :
                clonedState=action.data
            return clonedState

                


    default: return state;
    }
    

}

export default NotificationsReducer;


