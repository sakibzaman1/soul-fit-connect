// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJcG43FI-MH1m-lDjcSMB95Jh8YRxqre4",
  authDomain: "soul-fit-connect.firebaseapp.com",
  projectId: "soul-fit-connect",
  storageBucket: "soul-fit-connect.appspot.com",
  messagingSenderId: "392464049799",
  appId: "1:392464049799:web:783b89457ad1583b277a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;