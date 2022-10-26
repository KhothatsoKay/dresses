// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYczL_yjxfcB9HSs57BSpbKGaqAHS9Q_Q",
  authDomain: "ndumies-13a2e.firebaseapp.com",
  projectId: "ndumies-13a2e",
  storageBucket: "ndumies-13a2e.appspot.com",
  messagingSenderId: "274798427476",
  appId: "1:274798427476:web:691a22f167292333ec9cc1",
  measurementId: "G-NLX8PM79WB"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};