import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8W-yNWlvfibd2oS9PpQsjnmCTPFPGsog",
  authDomain: "proyecto-personal-react.firebaseapp.com",
  projectId: "proyecto-personal-react",
  storageBucket: "proyecto-personal-react.appspot.com",
  messagingSenderId: "453336113679",
  appId: "1:453336113679:web:e275bc225c3e0e4512b97a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


