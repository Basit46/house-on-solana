import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6J7YqtGNpBw3tRcB5OWrqrX-WcxFeBXM",
  authDomain: "electon-e97d3.firebaseapp.com",
  projectId: "electon-e97d3",
  storageBucket: "electon-e97d3.appspot.com",
  messagingSenderId: "847822810570",
  appId: "1:847822810570:web:a7998e6ddbf7a571a4b333",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
