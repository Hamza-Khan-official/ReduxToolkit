// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRSmPzYAi5Xs8Ue0pNXKAistN7ISvqoeM",
  authDomain: "webdb-3b260.firebaseapp.com",
  projectId: "webdb-3b260",
  storageBucket: "webdb-3b260.firebasestorage.app",
  messagingSenderId: "400641642787",
  appId: "1:400641642787:web:adc15c243b9f0b40ebbc96",
  measurementId: "G-L38WS86Z3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;