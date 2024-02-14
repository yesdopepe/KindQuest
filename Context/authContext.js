import { createContext, useEffect,useContext } from "react";
import { useState } from 'react';



export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, useIsAuthenticated] = useState(undefined);
  useEffect(() => {
    // onAuthStateChanged
    setTimeout(() => {
      useIsAuthenticated(false);
    }, 200);
  },[]);
  const login = async (email,password) => {
    try {
      
    } catch (e) {
      
    }
  }
  const logout = async () => {
    try {
      
    } catch (e) {
      
    }
  }
  const signup = async (email,password, username,profilepic) => {
    try {
      
    } catch (e) {
      
    }
  }
  return (
    <AuthContext.Provider value={{ user , isAuthenticated, login, logout, signup }}>
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
