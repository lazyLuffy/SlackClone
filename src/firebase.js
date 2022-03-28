import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDph4UqDlkpHI7XtJieZYQekIcOPzymOL4",
    authDomain: "slack-jatin-clone.firebaseapp.com",
    projectId: "slack-jatin-clone",
    storageBucket: "slack-jatin-clone.appspot.com",
    messagingSenderId: "113258100636",
    appId: "1:113258100636:web:05d0dd31abf45efd5dba59",
    measurementId: "G-ET1C957XG5"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore()
  const auth = firebaseapp.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}