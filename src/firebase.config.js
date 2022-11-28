import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJCyEWz6JE5qtonk7UrAGdnlDk04V-y9Y",
  authDomain: "house-marketplace-app-9dce5.firebaseapp.com",
  projectId: "house-marketplace-app-9dce5",
  storageBucket: "house-marketplace-app-9dce5.appspot.com",
  messagingSenderId: "116779738402",
  appId: "1:116779738402:web:0e3ceddc1134a9b4ee317b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()