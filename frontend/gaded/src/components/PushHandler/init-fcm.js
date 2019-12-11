import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyCQT_0CVCX_xF9-zxX5qHGgsuAueucJ0jE",
  // authDomain: "gaded-fb261.firebaseapp.com",
  // databaseURL: "https://gaded-fb261.firebaseio.com",
   projectId: "gaded-fb261",
  // storageBucket: "gaded-fb261.appspot.com",
  messagingSenderId: "965344958437",
   appId: "1:965344958437:web:5bd26f2fd1a74d3db1410c",
  // measurementId: "G-1N5YYYH28D"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BEt06oqKUI6E1fp0aNTX0ZciN17DDgEFxtKBT_U-FwWSz27GPf4BjGZrx9e0X0gnSICTnMWare3HkWoiGW2CTU0"
);

export { messaging };
