import React, { Component } from 'react';
import { messaging } from "./init-fcm";




class PushHandler extends Component {

    registerPushListener = pushNotification =>
            navigator.serviceWorker.addEventListener("message", ({ data }) =>
                // pushNotification(
                // data.data
                //     ? data.data.message
                //     : data["firebase-messaging-msg-data"].data.message
                // )
              console.log('got in active window')

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