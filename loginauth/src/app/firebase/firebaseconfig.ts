// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCPhRDnomjfrZkgqkjHudpCSJUKrXUPb7M",
    authDomain: "quizverse-softage.firebaseapp.com",
    databaseURL: "https://quizverse-softage-default-rtdb.firebaseio.com",
    projectId: "quizverse-softage",
    storageBucket: "quizverse-softage.firebasestorage.app",
    messagingSenderId: "504789138289",
    appId: "1:504789138289:web:9874a24dbce9de81c294d0",
    measurementId: "G-WFZWRD3N31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


export { database, auth, firestore, googleProvider };