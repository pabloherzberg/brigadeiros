importScripts("https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDEBF5B-DVKs8c4y066qtrhrxxUWr7x5p0",
  authDomain: "brigadeiropelomundo-yasmin.firebaseapp.com",
  databaseURL: "https://brigadeiropelomundo-yasmin.firebaseio.com",
  projectId: "brigadeiropelomundo-yasmin",
  storageBucket: "brigadeiropelomundo-yasmin.appspot.com",
  messagingSenderId: "698043028603",
  appId: "1:698043028603:web:710c29dbb98538f4d57ede",
  measurementId: "G-8P2S0DDP1L",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const title = "olá mundo";
  const options = {
    body: payload.data.status,
  };
  return self.registration.showNotification(title, options);
});
