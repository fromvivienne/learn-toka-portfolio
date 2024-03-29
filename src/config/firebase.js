// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3VrF1GVye4MZn7Epr3W-tguT5QydnSYE",
  authDomain: "learn-toka.firebaseapp.com",
  projectId: "learn-toka",
  storageBucket: "learn-toka.appspot.com",
  messagingSenderId: "907128123479",
  appId: "1:907128123479:web:d4710df1e922fc9b46b312",
  measurementId: "G-CQNLSVG56V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };