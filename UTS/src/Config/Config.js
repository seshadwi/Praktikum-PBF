import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD1HxgmppL9OnAFzPpc8UEMKXz46a_DXls",
    authDomain: "ecommerce-react-91d53.firebaseapp.com",
    projectId: "ecommerce-react-91d53",
    storageBucket: "ecommerce-react-91d53.appspot.com",
    messagingSenderId: "839090259327",
    appId: "1:839090259327:web:7ad19bcbd0c3b51663864a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }