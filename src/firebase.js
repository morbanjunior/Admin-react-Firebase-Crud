
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2OZVln40rNFFfLtJLAF_qr0QbL3klJIQ" ,
  authDomain: "adminreact-29a12.firebaseapp.com",
  projectId: "adminreact-29a12",
  storageBucket: "adminreact-29a12.appspot.com",
  messagingSenderId: "776218683471",
  appId: "1:776218683471:web:a8c08e02f4ad88a8c6223a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);