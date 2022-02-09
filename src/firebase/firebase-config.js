import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBes3fxIgpVtbO0J1jpkabAN_YYgNNAUMA",
  authDomain: "react-journal-app-e873c.firebaseapp.com",
  projectId: "react-journal-app-e873c",
  storageBucket: "react-journal-app-e873c.appspot.com",
  messagingSenderId: "27904053355",
  appId: "1:27904053355:web:21699df773dea76b80e12e"
};


 firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }