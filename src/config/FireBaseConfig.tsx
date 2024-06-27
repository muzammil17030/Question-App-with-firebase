// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkPLPBsOpTp9hIjCnWsh-7SuZSnypVey4",
  authDomain: "question-app-a0323.firebaseapp.com",
  projectId: "question-app-a0323",
  storageBucket: "question-app-a0323.appspot.com",
  messagingSenderId: "687470448742",
  appId: "1:687470448742:web:c8cb20b244a63dcf271da7",
  measurementId: "G-6B20FVWSG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;