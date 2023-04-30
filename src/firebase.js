// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDZ4kELMwOBH47cXt5rHdvQNNwg1lksEY",
  authDomain: "stareout-notes.firebaseapp.com",
  projectId: "stareout-notes",
  storageBucket: "stareout-notes.appspot.com",
  messagingSenderId: "43008709618",
  appId: "1:43008709618:web:6acdeae1e98d891060916b",
  measurementId: "G-BK8MNYS0FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth=getAuth()

export {app,auth}
export default db;