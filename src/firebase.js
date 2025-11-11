import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8uWskczwYPUG4fWBQ7XBcdHdKDM0wKVg",
  authDomain: "accounting-site-5c946.firebaseapp.com",
  projectId: "accounting-site-5c946",
  storageBucket: "accounting-site-5c946.firebasestorage.app",
  messagingSenderId: "1030715238547",
  appId: "1:1030715238547:web:84e73751e15b0e26e84566",
  measurementId: "G-7WC5XS8LJD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
