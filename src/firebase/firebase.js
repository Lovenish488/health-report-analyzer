import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// optional (warning avoid karne ke liye hata sakte ho)
 // import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyDv-iogQ1XXWmyihGuW5FMUjlEt3QxWm_o",
  authDomain: "health-app-311fc.firebaseapp.com",
  projectId: "health-app-311fc",
  storageBucket: "health-app-311fc.firebasestorage.app",
  messagingSenderId: "55297239387",
  appId: "1:55297239387:web:496c86b1f8ac556152527e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ YE LINE MOST IMPORTANT
export const db = getFirestore(app);