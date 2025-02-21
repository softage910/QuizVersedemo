// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);