import firebase from 'firebase';
import 'firebase/firestore';
let config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXX",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "XXXXXXXXXXXXXXXXX"
};
firebase.initializeApp(config);
export const db = firebase.firestore();
