importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyCQT_0CVCX_xF9-zxX5qHGgsuAueucJ0jE",
    authDomain: "gaded-fb261.firebaseapp.com",
    databaseURL: "https://gaded-fb261.firebaseio.com",
    projectId: "gaded-fb261",
    storageBucket: "gaded-fb261.appspot.com",
    messagingSenderId: "965344958437",
    appId: "1:965344958437:web:5bd26f2fd1a74d3db1410c",
    measurementId: "G-1N5YYYH28D"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});