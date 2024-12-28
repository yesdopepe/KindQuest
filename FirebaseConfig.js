import { initializeApp } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore,collection } from 'firebase/firestore';



// Initialize Firebase
const firebaseConfig = {
    apiKey: '',
    authDomain: "kindquest-1256c.firebaseapp.com",
    projectId: "kindquest-1256c",
    storageBucket: "kindquest-1256c.appspot.com",
    messagingSenderId: "115100617755",
    appId: "1:115100617755:web:9e7aa679a8ae0574163cbe",
    measurementId: "G-1HT6CDEK4N"
  };

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
})
export const db = getFirestore(app)

export const usersRef = collection(db, 'users')
export const roomsRef = collection(db, 'rooms')
