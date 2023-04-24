
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0q5rAsLrz2c7uIy4FTkoo5Uo_uRjj7Lk",
  authDomain: "context-auth-login.firebaseapp.com",
  projectId: "context-auth-login",
  storageBucket: "context-auth-login.appspot.com",
  messagingSenderId: "455996853746",
  appId: "1:455996853746:web:cf086e7c299ccbf5c6ef6b"
};


const app = initializeApp(firebaseConfig);
export  default app