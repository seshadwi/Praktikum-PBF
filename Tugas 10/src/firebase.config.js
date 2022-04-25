import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZz2rpAqg3tS2v0UJWAUifeoi7KNvA7sE",
    authDomain: "react-auth-3a949.firebaseapp.com",
    projectId: "react-auth-3a949",
    storageBucket: "react-auth-3a949.appspot.com",
    messagingSenderId: "708149551525",
    appId: "1:708149551525:web:37beff3b67754b4173084c"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();
// const db = firebase.firestore();
// const storage = firebase.storage();

export { auth, authentication }