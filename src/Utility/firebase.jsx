// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Ib6amgLxRIEch9qASfuqHKjHUjBdozA",
  authDomain: "clone-dab8c.firebaseapp.com",
  projectId: "clone-dab8c",
  storageBucket: "clone-dab8c.firebasestorage.app",
  messagingSenderId: "994168452670",
  appId: "1:994168452670:web:f9422d758a99a27f5b036f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=app.firestore();
