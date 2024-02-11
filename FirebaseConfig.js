import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "kindquest-1256c.firebaseapp.com",
    projectId: "kindquest-1256c",
    storageBucket: "kindquest-1256c.appspot.com",
    messagingSenderId: "115100617755",
    appId: "1:115100617755:web:9e7aa679a8ae0574163cbe",
    measurementId: "G-1HT6CDEK4N"
  };

export const Firebaseinit = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseinit);

