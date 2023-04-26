import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Component/Firebase/Firebase.config';
 export  const AuthContext = createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [currentUser , setCurrentUser]= useState(null)
    const [loading, setLoading] = useState(true)

  useEffect (() => {
   const unsubscribe =  onAuthStateChanged(auth, currentUser => {
    setCurrentUser(currentUser)
    setLoading(false)
   })
   return () => {
    return unsubscribe()
   }
  }, [])

   // Create User email and password setup auth firebase
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign user email and password setup auth firebase 
    const signIn = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout 
    const logOut = () => {
       return signOut(auth)
    }
    const userInfo ={
        loading,
        user,
        createUser,
        signIn,
        currentUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;