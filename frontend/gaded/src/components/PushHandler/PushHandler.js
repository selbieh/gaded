import React, { Component } from 'react';
import { messaging } from "./init-fcm";
import {connect} from 'react-redux';
import * as actions from '../Reducers/Notification/AsyncNotificationActions';
import * as asyncAuthActions from '../Reducers/Auth/AsyncAuthActions';







class PushHandler extends Component {



    registerPushListener = () =>//(pushNotification)
            navigator.serviceWorker.addEventListener("message", ({ data }) =>
             
             
            this.props.getNottification(null,'update')
            
  );


    async componentDidMount() {
      if (localStorage.getItem('FCM')){
        this.props.saveFCMKey(localStorage.getItem('FCM'))

      }
        messaging
          .requestPermission()
          .then(async function() {
            const token = await messaging.getToken();
            if (!localStorage.getItem('FCM') || token !== localStorage.getItem('FCM')){
              localStorage.setItem('FCM',token)
              window.location.reload(false);
            }
            
          })
          
          .catch(function(err) {
            console.log("Unable to get permission to notify.", err);
            alert("please enable notifications and reolad the page")
          });
  
        this.registerPushListener();

      }
    render() {
        return (
            <React.Fragment></React.Fragment>
        );
    }
}


const mapActionToProps = dispatch =>{
  return {
    getNottification:()=>dispatch(actions.asyncFetchNotification(null,'update')),
    saveFCMKey: (key)=>dispatch(asyncAuthActions.asyncsaveFCMToStore(key))

  }
}
export default connect(null,mapActionToProps) (PushHandler);