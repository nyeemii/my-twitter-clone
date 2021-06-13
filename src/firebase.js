import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClWbq3CwER8_FfOdaR3gxghoBlSYa73fk",
  authDomain: "twitter-clone-41001.firebaseapp.com",
  projectId: "twitter-clone-41001",
  storageBucket: "twitter-clone-41001.appspot.com",
  messagingSenderId: "541444596784",
  appId: "1:541444596784:web:704e35150067ee9ecab9f5",
  measurementId: "G-8Z5NG2XK37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
