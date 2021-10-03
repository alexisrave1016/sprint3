
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZpSVXbHvL8bq_XQyKl2xgitv3TOGdu0s",
  authDomain: "loginsprint3.firebaseapp.com",
  projectId: "loginsprint3",
  storageBucket: "loginsprint3.appspot.com",
  messagingSenderId: "1080040605487",
  appId: "1:1080040605487:web:0f0d26bf4d0e774c4103da"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {app, google}