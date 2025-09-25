// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration, provided by you.
const firebaseConfig = {
  apiKey: "AIzaSyCfmOqhw9wRHmHFCj9van6ZFrgKF9GQUlU",
  authDomain: "unidirect-reborn.firebaseapp.com",
  projectId: "unidirect-reborn",
  storageBucket: "unidirect-reborn.firebasestorage.app",
  messagingSenderId: "573236740382",
  appId: "1:573236740382:web:4a3402f1b427168499890f",
  measurementId: "G-VXE868MXQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase services you'll need
export const auth = getAuth(app);
export const db = getFirestore(app);
