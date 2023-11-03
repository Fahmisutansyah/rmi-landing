// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FB_KEY,
//   authDomain: process.env.DOM,
//   projectId: process.env.PROJ_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASURE_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCBrqncyuiGK4tJl1I13UvLVxdUjLQS67M",
  authDomain: "rmi-landing.firebaseapp.com",
  projectId: "rmi-landing",
  storageBucket: "rmi-landing.appspot.com",
  messagingSenderId: "940615623890",
  appId: "1:940615623890:web:0cd69d328e236d477ff90b",
  measurementId: "G-P40C9KJ9VH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
