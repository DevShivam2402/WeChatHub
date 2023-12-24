import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAD4X-IegTEulF4qzDBezhAXQt-sRWAttM",
  authDomain: "test-f1f27.firebaseapp.com",
  projectId: "test-f1f27",
  storageBucket: "test-f1f27.appspot.com",
  messagingSenderId: "819175033718",
  appId: "1:819175033718:web:5deeaac0650e7731378857",
  measurementId: "G-07M24PFGZM",
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
