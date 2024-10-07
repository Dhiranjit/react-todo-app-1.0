// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlALmem_hch1iaFLzkHl0Y4kgce2cjyek",
  authDomain: "react-to-do-d3981.firebaseapp.com",
  projectId: "react-to-do-d3981",
  storageBucket: "react-to-do-d3981.appspot.com",
  messagingSenderId: "760360825911",
  appId: "1:760360825911:web:88fd43e0df66e18b367bb2",
  measurementId: "G-DPFGY902PB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
const analytics = getAnalytics(app);
