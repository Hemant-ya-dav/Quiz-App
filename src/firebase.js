// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfyVJpFYEjs0-nV5yYYe9CmaKLY6lbCLA",
  authDomain: "tally-quiz-eaf7f.firebaseapp.com",
  projectId: "tally-quiz-eaf7f",
  storageBucket: "tally-quiz-eaf7f.appspot.com",
  messagingSenderId: "1091225353216",
  appId: "1:1091225353216:web:09699ae12e1f1c7e376ce5",
  measurementId: "G-BK19SZ97XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export default firebaseApp;
// export { db, auth };
