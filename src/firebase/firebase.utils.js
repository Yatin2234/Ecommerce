import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9LwgOl25yD_YFIQTTypG_SexXPscgeMk",
  authDomain: "crown-db-519af.firebaseapp.com",
  databaseURL: "https://crown-db-519af.firebaseio.com",
  projectId: "crown-db-519af",
  storageBucket: "crown-db-519af.appspot.com",
  messagingSenderId: "189751518405",
  appId: "1:189751518405:web:f662798381c280e81c7cac",
  measurementId: "G-46HDPMZY16",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "select account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
