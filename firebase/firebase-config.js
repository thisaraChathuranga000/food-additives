import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD8JxJYq1l03-h21u_bMq-gKsTW-tPCEC4",
  authDomain: "food-additives-3cc86.firebaseapp.com",
  projectId: "food-additives-3cc86",
  storageBucket: "food-additives-3cc86.firebasestorage.app",
  messagingSenderId: "938282958808",
  appId: "1:938282958808:web:8a3ae3056dda674a047cad",
  measurementId: "G-803E56X6MB"
};

export const app = initializeApp(firebaseConfig);
