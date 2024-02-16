import { createContext, useEffect,useContext } from "react";
import { useState } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import { auth, db } from "../FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { router } from "expo-router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const updateUserData = async (userID) => {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      setUser({...user, "username": data.username, "profileUrl": data.profilepic, "userId": data.uid})
    }
  }
  useEffect(() => {
    // onAuthStateChanged
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        updateUserData(user.uid);
      }
      else{
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;
  },[]);
  const login = async (email,password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/')
      return {success : true, data : user}
    } catch (e) {
      return {success : false, error : e.message}
    }
  }
  const logout = async () => {
    try {
      await signOut(auth);
      return {success : true,}
    } catch (e) {
      return {success : false, error : e.message}
    }
  }
  const Register = async (email,password, username,profilepic) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      
      await setDoc(doc(db,"users", response?.user?.uid),{
        username: username,
        profilepic: profilepic,
        email: email,
        uid: response?.user?.uid,
      })
      router.replace('/')
      return {success: true, data: response?.user}
    } catch (e) {
      let msg = e.message
      return {success: false, data: msg}
    }
  }
  return (
    <AuthContext.Provider value={{ user , isAuthenticated, login, logout, Register }}>
      {children}
      </AuthContext.Provider>
      )


}
export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth must be used within an AuthProvider tags');
  }
  return value;
}
