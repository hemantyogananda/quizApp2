import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Optionally import the services that you want to use
// import * as getFirestore from 'firebase/auth';
// import {...} from 'firebase/database';
// import * as getAuth from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCxJIWxw9uavqCw8DQx3Pyqk_BAn0if1v0",
    authDomain: "quizapp-1a7f2.firebaseapp.com",
    projectId: "quizapp-1a7f2",
    storageBucket: "quizapp-1a7f2.firebasestorage.app",
    messagingSenderId: "292058507992",
    appId: "1:292058507992:web:4fe5c706f580004063c5ad",
    measurementId: "G-R5RWQWCCWS"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


// const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
