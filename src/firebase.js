// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKPfsUhdsjlmE5ckn-FVpuqu_qes4ij8",
  authDomain: "range-0000.firebaseapp.com",
  projectId: "range-0000",
  storageBucket: "range-0000.appspot.com",
  messagingSenderId: "146426204838",
  appId: "1:146426204838:web:4712b87720e6fd2bdf1a67",
  measurementId: "G-RB5Z3QKQE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { auth, firestore, serverTimestamp };
export default app;