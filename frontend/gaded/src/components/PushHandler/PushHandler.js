import React, { Component } from 'react';
import { messaging } from "./init-fcm";
import {connect} from 'react-redux';
import * as actions from '../Reducers/Notification/AsyncNotificationActions';





class PushHandler extends Component {

    registerPushListener = () =>//(pushNotification)
            navigator.serviceWorker.addEventListener("message", ({ data }) =>
             
             
            this.props.getNottification(null,'update')
  );


    async componentDidMount() {
  
        messaging
          .requestPermission()
          .then(async function() {
            const token = await messaging.getToken();
            //setToken(token);
            console.log(token)
          })
          .catch(function(err) {
            console.log("Unable to get permission to notify.", err);
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
    getNottification:()=>dispatch(actions.asyncFetchNotification(null,'update'))

  }
}
export default connect(null,mapActionToProps) (PushHandler);