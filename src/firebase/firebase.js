
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBNyXxrT1mpROv_3NSGyEfH3c1ouQuXFwo",
  authDomain: "react-9ade0.firebaseapp.com",
  projectId: "react-9ade0",
  storageBucket: "react-9ade0.appspot.com",
  messagingSenderId: "297753363482",
  appId: "1:297753363482:web:f8d9d7648a96bf1cf5fda3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)