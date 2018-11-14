import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAqiwUQ7GQT5lkk7wmGbUQptKkex1iE7CA",
    authDomain: "christmas-wish-family.firebaseapp.com",
    databaseURL: "https://christmas-wish-family.firebaseio.com",
    projectId: "christmas-wish-family",
    storageBucket: "christmas-wish-family.appspot.com",
    messagingSenderId: "9357487478"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;