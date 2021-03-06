import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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
// const analytics = getAnalytics(app);
// const storage = getStorage(app, "gs://medisale-app.appspot.com");
const auth = getAuth();
const db = getFirestore();

export { auth, db, app };
