// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlwzdwEQ9TdMBi5RFsALelK48nLzrR1r4",
  authDomain: "email-password-auth-53779.firebaseapp.com",
  projectId: "email-password-auth-53779",
  storageBucket: "email-password-auth-53779.firebasestorage.app",
  messagingSenderId: "777588509514",
  appId: "1:777588509514:web:007d941a83f4c4550acfb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);