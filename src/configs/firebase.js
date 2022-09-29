// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYN0i76QiQIl-pME3nuUzURQTENKoMeAk",
  authDomain: "users-table-4d321.firebaseapp.com",
  databaseURL: "https://users-table-4d321-default-rtdb.firebaseio.com",
  projectId: "users-table-4d321",
  storageBucket: "users-table-4d321.appspot.com",
  messagingSenderId: "66802012091",
  appId: "1:66802012091:web:f754dc683708b072073e9e",
  measurementId: "G-K20WX77G32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
