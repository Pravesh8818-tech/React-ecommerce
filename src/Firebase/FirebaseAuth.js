import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5cmBxKUDkxHGx7t0zvZJv8ohhuPwR4Ig",
  authDomain: "mechshop-5d791.firebaseapp.com",
  projectId: "mechshop-5d791",
  storageBucket: "mechshop-5d791.firebasestorage.app",
  messagingSenderId: "884256445774",
  appId: "1:884256445774:web:ee41bbbaf6dbfef0eefa1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { auth, app, db };
