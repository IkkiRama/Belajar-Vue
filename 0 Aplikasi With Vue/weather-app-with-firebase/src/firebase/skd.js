import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-KmlFO4_pGgnyWz-uLmOUrQEuFeiFAw",
  authDomain: "weather-app-with-firebas-fb60a.firebaseapp.com",
  projectId: "weather-app-with-firebas-fb60a",
  storageBucket: "weather-app-with-firebas-fb60a.appspot.com",
  messagingSenderId: "632549704927",
  appId: "1:632549704927:web:85d2728dd4adc90844d56a",
  measurementId: "G-76JD3LV68C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore(app);
