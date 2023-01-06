// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMkpTPL6fyde07wEsoGrIXmhWzPvzu7Zk",
    authDomain: "coffeecard-dev-92a0a.firebaseapp.com",
    databaseURL: "https://coffeecard-dev-92a0a-default-rtdb.firebaseio.com",
    projectId: "coffeecard-dev-92a0a",
    storageBucket: "coffeecard-dev-92a0a.appspot.com",
    messagingSenderId: "784205595497",
    appId: "1:784205595497:web:f79774e3bc33f9cbd673f8",
    measurementId: "G-R6NDV4KV0B"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase.
export const initFirebase = () => {
  return app;
};