// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBScRvFz_9DAoe51Gag3cVmjfYTPfLXF60",
  authDomain: "value-harvester.firebaseapp.com",
  projectId: "value-harvester",
  storageBucket: "value-harvester.appspot.com",
  messagingSenderId: "647564036050",
  appId: "1:647564036050:web:3df1148b18a917c3f72a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const db = getFirestore()