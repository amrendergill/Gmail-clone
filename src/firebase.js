import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDc5j0MAdilW9kWpBm_5Wd7brLvuMQglOg",
  authDomain: "clone-28547.firebaseapp.com",
  projectId: "clone-28547",
  storageBucket: "clone-28547.appspot.com",
  messagingSenderId: "497399330028",
  appId: "1:497399330028:web:c8c0d73905ce11111aa1c9",
};
const firebaseApp =firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export {db , provider , auth };