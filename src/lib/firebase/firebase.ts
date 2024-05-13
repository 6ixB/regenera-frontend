// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxwnUd0gu7YHzqKG76blvKkpBLV0D270E",
  authDomain: "regenera-da102.firebaseapp.com",
  projectId: "regenera-da102",
  storageBucket: "regenera-da102.appspot.com",
  messagingSenderId: "757430005114",
  appId: "1:757430005114:web:79a78e7c9b41c196003ac3",
  measurementId: "G-SNGDXPXZZL",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

export { app, analytics };
