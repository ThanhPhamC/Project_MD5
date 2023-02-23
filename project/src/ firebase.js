import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCarjOWKjJQI8JGVmJXsw3t9HrP-leIbb0",
  authDomain: "react-firebase-6addc.firebaseapp.com",
  projectId: "react-firebase-6addc",
  storageBucket: "react-firebase-6addc.appspot.com",
  messagingSenderId: "871535840769",
  appId: "1:871535840769:web:15393b475a7f904ce7fa00",
  measurementId: "G-JVW74GZ3NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);