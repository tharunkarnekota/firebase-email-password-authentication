import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAev-w7r1v5TA55wYPWqjrFT3ULZZaAhrU",
  authDomain: "auth-da057.firebaseapp.com",
  projectId: "auth-da057",
  storageBucket: "auth-da057.appspot.com",
  messagingSenderId: "152169207479",
  appId: "1:152169207479:web:09407a28de713daebe5f32"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;