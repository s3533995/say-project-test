import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDuBT-42wXUjgg3-4bUYIRKAmEAynq9AlA",
    authDomain: "say-i-do-235511.firebaseapp.com",
    databaseURL: "https://say-i-do-235511.firebaseio.com",
    projectId: "say-i-do-235511",
    storageBucket: "say-i-do-235511.appspot.com",
    messagingSenderId: "981899196854"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;