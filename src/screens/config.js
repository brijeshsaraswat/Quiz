import firebase from 'firebase';
import 'firebase/firestore';
let config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXXXXXX",
    appId: "1:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "XXXXXXXXXXXXXXXXX"
};
firebase.initializeApp(config);
export const db = firebase.firestore();
