import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Component/Firebase/Firebase.config';
 export  const AuthContext = createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
   // Create User email and password setup auth firebase
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign user email and password setup auth firebase 
    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo ={
        user,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;