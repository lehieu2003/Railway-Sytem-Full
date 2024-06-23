// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtK_4ikW1AzLFVcxcGgn5-GOavljCMzpg",
  authDomain: "railway-sytem.firebaseapp.com",
  projectId: "railway-sytem",
  storageBucket: "railway-sytem.appspot.com",
  messagingSenderId: "666008105774",
  appId: "1:666008105774:web:15570839dfecb10352c0bf",
  measurementId: "G-XVXG1SVFEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
