// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ff62c.firebaseapp.com",
  projectId: "mern-auth-ff62c",
  storageBucket: "mern-auth-ff62c.appspot.com",
  messagingSenderId: "1039493261186",
  appId: "1:1039493261186:web:a34c481fe807d87b4c119b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);