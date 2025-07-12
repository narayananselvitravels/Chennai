// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqPTMu1Bb7WDnwCL8gMMSohYzsEL5w1WQ",
  authDomain: "narayananselvitravels-6e4ca.firebaseapp.com",
  databaseURL: "https://narayananselvitravels-6e4ca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "narayananselvitravels-6e4ca",
  storageBucket: "narayananselvitravels-6e4ca.firebasestorage.app",
  messagingSenderId: "591864703196",
  appId: "1:591864703196:web:7f6813039657765842ac19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export for use in your HTML scripts
export { database, ref, set, push, onValue, remove, update };