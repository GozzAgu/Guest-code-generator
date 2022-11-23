import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyC_F1X2K1fquVnkoixDBTKPn4Ql7xE9ZQw",
  authDomain: "chat-cf2a6.firebaseapp.com",
  databaseURL: "https://chat-cf2a6-default-rtdb.firebaseio.com",
  projectId: "chat-cf2a6",
  storageBucket: "chat-cf2a6.appspot.com",
  messagingSenderId: "780078196383",
  appId: "1:780078196383:web:084b3b9f6e7e12d722a4aa"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timeStampsInSnapshots: true})

export default firebaseApp.firestore();