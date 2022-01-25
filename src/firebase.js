
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCw2bVRdi9cqhEOmv93cmiRSiFdKFeYjiQ",
  authDomain: "react-authentication-9f48f.firebaseapp.com",
  projectId: "react-authentication-9f48f",
  storageBucket: "react-authentication-9f48f.appspot.com",
  messagingSenderId: "1092934203592",
  appId: "1:1092934203592:web:a37c0c8a5ad2166a968dfd",
  measurementId: "G-XM271M6K2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;
