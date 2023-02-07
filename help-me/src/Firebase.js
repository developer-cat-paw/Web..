import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDzBsGGIuClmIq1Up_RDxxMRhU4ykEK2Pk",
  authDomain: "sexy-b53e8.firebaseapp.com",
  projectId: "sexy-b53e8",
  storageBucket: "sexy-b53e8.appspot.com",
  messagingSenderId: "229263644263",
  appId: "1:229263644263:web:f4275080438d1ba49366c2",
  measurementId: "G-S7NHX2X2TD"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth=firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();