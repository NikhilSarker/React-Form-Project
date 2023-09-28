// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcnjeMY7H_fW_xbefbc-3OW6DzB3q0NC0",
  authDomain: "react-form-project-a8855.firebaseapp.com",
  projectId: "react-form-project-a8855",
  storageBucket: "react-form-project-a8855.appspot.com",
  messagingSenderId: "48894298229",
  appId: "1:48894298229:web:c08c35ebdc57ba7049d03c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

