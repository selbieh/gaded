import React, { Component } from 'react';
import { messaging } from "./init-fcm";
import Axios from 'axios';




class PushHandler extends Component {

    registerPushListener = pushNotification =>
            navigator.serviceWorker.addEventListener("message", ({ data }) =>
             
              Axios.get('http://127.0.0.1:8000/test-get-not/')
              .then(res=>console.log('note got'))
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

export default PushHandler;