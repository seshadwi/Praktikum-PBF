import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyDzBkaGopbGijXSvNOGJh-c9WGVFSmdAYs",
    authDomain: "reactfirestore-d346f.firebaseapp.com",
    projectId: "reactfirestore-d346f",
    storageBucket: "reactfirestore-d346f.appspot.com",
    messagingSenderId: "30752526950",
    appId: "1:30752526950:web:d54a737ff34810705e93a7"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
