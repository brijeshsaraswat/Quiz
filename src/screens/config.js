import firebase from 'firebase';
import 'firebase/firestore';
let config = {
    apiKey: "AIzaSyBsE_QCYOaplKio1E_X8VhcfXw5axy-o5Y",
    authDomain: "todos-b29f3.firebaseapp.com",
    databaseURL: "https://todos-b29f3.firebaseio.com",
    projectId: "todos-b29f3",
    storageBucket: "todos-b29f3.appspot.com",
    messagingSenderId: "752139128528",
    appId: "1:752139128528:web:e34d5b455f3f21d7e958d5",
    measurementId: "G-2K68WDPYRM"
};
firebase.initializeApp(config);
export const db = firebase.firestore();