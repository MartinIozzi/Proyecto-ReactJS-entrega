import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzY3J8d_8C0T-uYl6gt_t_vni46uDOHUU",
  authDomain: "reactjs-proyectopersonal.firebaseapp.com",
  projectId: "reactjs-proyectopersonal",
  storageBucket: "reactjs-proyectopersonal.appspot.com",
  messagingSenderId: "854610101041",
  appId: "1:854610101041:web:fa68b4a4175beb24546610"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




