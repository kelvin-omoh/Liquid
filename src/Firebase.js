// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLSrBbYQ-W_usECCIvETmkxqWT80zR4FA",
  authDomain: "global-finance-38db8.firebaseapp.com",
  projectId: "global-finance-38db8",
  storageBucket: "global-finance-38db8.appspot.com",
  messagingSenderId: "1052442501425",
  appId: "1:1052442501425:web:14b74d26039d1c8a5bd010",
  measurementId: "G-KN9YYY34VY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app