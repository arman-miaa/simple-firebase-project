// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1CakgiZrSmErXV7aDUygVLNh2Q4cMyPU",
  authDomain: "practice-firebase-651d6.firebaseapp.com",
  projectId: "practice-firebase-651d6",
  storageBucket: "practice-firebase-651d6.firebasestorage.app",
  messagingSenderId: "539167895629",
  appId: "1:539167895629:web:cabfcf57f08250d3e9ac04",
  measurementId: "G-V499X9RZ7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

