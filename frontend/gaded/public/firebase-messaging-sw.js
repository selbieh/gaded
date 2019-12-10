importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: "965344958437"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
 
  self.clients.matchAll({includeUncontrolled: true}).then(function (clients) {
     clients.forEach(function(client) {
         client.postMessage('background should update');

     })
     
   })
  const title = payload.data.title;
   const options = {
      body: payload.data.body
  };

  return self.registration.showNotification(title, options);
});


self.addEventListener('notificationclick', (event) => {
  // event.notification.close();
  //   event.waitUntil(
  //     //clients.openWindow(event.notification.data.url + "?notification_id=" + event.notification.data.id)
  //     clients.openWindow('/')

  //   );
  

 
 });
