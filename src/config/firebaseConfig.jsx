
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCi3aMabrJCBkD3UB7ig5I5J2HH6-MAqc8",
  authDomain: "stylit-ad4f3.firebaseapp.com",
  projectId: "stylit-ad4f3",
  storageBucket: "stylit-ad4f3.appspot.com",
  messagingSenderId: "622841778123",
  appId: "1:622841778123:web:26258355f15fdbbebe304e",
  measurementId: "G-WN88TZLHD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

//firebase

