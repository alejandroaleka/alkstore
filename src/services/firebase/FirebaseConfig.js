// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vJBuRvIhGkocKPzwz1jpYfnxRbHiUWM",
  authDomain: "alk-store.firebaseapp.com",
  projectId: "alk-store",
  storageBucket: "alk-store.appspot.com",
  messagingSenderId: "887176465883",
  appId: "1:887176465883:web:90acf1d04dc4d0dd022bfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
