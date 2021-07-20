import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYb6dg5CH8PusV_44hGp6-jL7UbPw1JEs",
  authDomain: "disney-plus-c5993.firebaseapp.com",
  projectId: "disney-plus-c5993",
  storageBucket: "disney-plus-c5993.appspot.com",
  messagingSenderId: "928352231905",
  appId: "1:928352231905:web:e46000bcdb7551bcaef2a0",
  measurementId: "G-5SL99RHX7S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
