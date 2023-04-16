// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKw_NcNOf2rAgvrts6ZDATJ-qRGjd-DE",
  authDomain: "auth-firebase-context-ta-77242.firebaseapp.com",
  projectId: "auth-firebase-context-ta-77242",
  storageBucket: "auth-firebase-context-ta-77242.appspot.com",
  messagingSenderId: "802238531380",
  appId: "1:802238531380:web:fbb88e71ef76754d608761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};