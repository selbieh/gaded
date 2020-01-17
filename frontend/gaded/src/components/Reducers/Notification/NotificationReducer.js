import * as actionTypes from './NotificationActionType';


const intState={
    results:[],
    notificationCount:0
}




const NotificationsReducer = (state=intState ,action)=>{
    let clonedState={...state}

   
    switch (action.type){
        case actionTypes.FetchNotifications :
             const clonedResults=[...clonedState.results]
             const results=clonedResults.concat(action.data.results)
            return {...clonedState,...action.data,results}

        case actionTypes.FetchNotificationsUpdate :
            const fetchedData=action.data
            return {...clonedState,fetchedData}

        // case actionTypes.getNotificationCount :
        //         const notificationCount=action.data
        //     return {...clonedState,notificationCount}

        case actionTypes.notificationUpdateUi :
               try{
                   const objeIndex=clonedState.results.findIndex((el)=>(el.id).toString()===(action.data.pk).toString() )
                    // const theObject=clonedState.results[objeIndex]
                    const results=clonedState.results

                    results[objeIndex].seen=true

                    // results.splice(objeIndex,1)
                    // results.push(theObject)
                    const notificationCount=action.data.notificationCount
                   return {...clonedState,results,notificationCount}
               }
               catch(error){
                    return clonedState
                 }
               

        default: return state;
    }
    

}

export default NotificationsReducer;


