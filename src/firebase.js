// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCgwiQsYCW2LvmVHzvtUBKt19fnzeV8taE",
    authDomain: "e-com-29841.firebaseapp.com",
    projectId: "e-com-29841",
    storageBucket: "e-com-29841.appspot.com",
    messagingSenderId: "869487068173",
    appId: "1:869487068173:web:3bb8c3e3694122e4d58144",
    measurementId: "G-YYZBBL16KM",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
