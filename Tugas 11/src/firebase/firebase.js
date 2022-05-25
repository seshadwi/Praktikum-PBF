import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkuc7DW_oodmcIPOVrOP5WzLNU2MB6ARQ",
    authDomain: "prak11-firebase-login.firebaseapp.com",
    projectId: "prak11-firebase-login",
    storageBucket: "prak11-firebase-login.appspot.com",
    messagingSenderId: "1002887371031",
    appId: "1:1002887371031:web:5ea13868b365663d263f52"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDB = myFirebase.firestore();
export const db = baseDB;

