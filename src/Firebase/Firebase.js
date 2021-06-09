import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBq8he7iWMqBKwN6LIwSLdXZm7D0RXwMZQ",
  authDomain: "inuchat-bf919.web.app",
  projectId: "inuchat-bf919",
  storageBucket: "inuchat-bf919.appspot.com",
  messagingSenderId: "810558741988",
  appId: "1:810558741988:web:52c7f4c3aff30eb81a7bf1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
