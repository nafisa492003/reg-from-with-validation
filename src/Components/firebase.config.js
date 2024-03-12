// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI-xouElGLbZqv2ELavZ4rdl5rtgHPztM",
  authDomain: "chatapp-eab57.firebaseapp.com",
  projectId: "chatapp-eab57",
  storageBucket: "chatapp-eab57.appspot.com",
  messagingSenderId: "1089961384608",
  appId: "1:1089961384608:web:21f578c4a1619c00cec7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig