// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3bsHTEjB-gzDUcMZk0H501lqpPNs3KEo",
    authDomain: "ecommerce-aba59.firebaseapp.com",
    projectId: "ecommerce-aba59",
    storageBucket: "ecommerce-aba59.appspot.com",
    messagingSenderId: "161507781268",
    appId: "1:161507781268:web:b24d523bdd7ee662ad6281",
    measurementId: "G-N38L4P0W23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()